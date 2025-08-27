# Auth0 Setup for Rosebud Quilting Admin Dashboard

This document explains how to configure Auth0 for the Rosebud Quilting admin dashboard.

## Auth0 Configuration Steps

### 1. Create Auth0 Application

1. Go to [Auth0 Dashboard](https://manage.auth0.com/)
2. Create a new application
3. Choose "Regular Web Applications"
4. Name it "Rosebud Quilting Admin"

### 2. Configure Application Settings

In your Auth0 application settings:

**Allowed Callback URLs:**
```
http://localhost:3000/api/auth/callback
https://your-production-domain.com/api/auth/callback
```

**Allowed Logout URLs:**
```
http://localhost:3000
https://your-production-domain.com
```

**Allowed Web Origins:**
```
http://localhost:3000
https://your-production-domain.com
```

### 3. Environment Variables

Update your `.env.local` file with your Auth0 credentials:

```env
# Auth0 Configuration
AUTH0_SECRET='your-32-character-secret-key'
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL='https://your-tenant.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'

# Admin user emails that should have access to admin dashboard
ADMIN_ALLOWED_EMAILS='admin@rosebudquilting.com,emma@rosebudquilting.com,diana@rosebudquilting.com'
```

**To generate AUTH0_SECRET:**
```bash
openssl rand -hex 32
```

### 4. Auth0 Users

Add admin users to your Auth0 tenant:
1. Go to User Management > Users
2. Create users with emails listed in `ADMIN_ALLOWED_EMAILS`
3. Set temporary passwords (users can change on first login)

### 5. Production Setup

For production deployment:

1. Update `AUTH0_BASE_URL` to your production domain
2. Add production URLs to Auth0 application settings
3. Ensure `AUTH0_SECRET` is properly secured
4. Consider using Auth0 Rules or Actions for additional authorization logic

## How It Works

### Authentication Flow

1. User visits `/admin`
2. Middleware checks for valid session
3. If no session, redirects to `/api/auth/login`
4. Auth0 handles authentication
5. On success, redirects to `/api/auth/callback`
6. Callback validates user email against `ADMIN_ALLOWED_EMAILS`
7. If authorized, creates session and redirects to `/admin`

### Session Management

- Sessions are stored in HTTP-only cookies
- Sessions expire based on Auth0 token expiration
- Middleware validates sessions on each admin route access

### Admin Authorization

- Only emails listed in `ADMIN_ALLOWED_EMAILS` can access admin dashboard
- Authorization is checked both at login and on each request
- Unauthorized users see appropriate error messages

## API Routes

- `GET /api/auth/login` - Initiates Auth0 login
- `GET /api/auth/logout` - Logs out and clears session
- `GET /api/auth/callback` - Handles Auth0 callback
- `GET /api/auth/me` - Returns current user info

## Components

- `Auth0Provider` - Provides authentication context
- `AdminAuthWrapper` - Handles loading/error/login states
- `AdminHeader` - Shows user info and logout option

## Testing

1. Start development server: `npm run dev`
2. Go to `http://localhost:3000/admin`
3. You should be redirected to Auth0 login
4. Log in with an admin email
5. You should be redirected back to admin dashboard

## Troubleshooting

### Common Issues

1. **"Configuration not found"** - Check environment variables are set
2. **"Unauthorized"** - Ensure user email is in `ADMIN_ALLOWED_EMAILS`
3. **"Callback failed"** - Check callback URL configuration in Auth0
4. **Infinite redirect** - Check Auth0 application type and URLs

### Debug Steps

1. Check browser console for errors
2. Check server logs for Auth0 API errors
3. Verify environment variables are loaded
4. Test Auth0 configuration with Auth0 debugging tools

## Security Considerations

- Never commit `.env.local` to version control
- Use strong, unique `AUTH0_SECRET`
- Regularly rotate secrets
- Consider implementing session refresh
- Monitor failed login attempts
- Use HTTPS in production
