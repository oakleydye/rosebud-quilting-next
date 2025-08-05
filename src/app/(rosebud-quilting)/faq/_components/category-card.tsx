"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HelpCircle, Phone, Mail, MessageCircle } from "lucide-react";

type CategoryCardProps = {
  category: {
    title: string;
    description: string;
    icon: string;
    key: string;
  };
  index: number;
};

export function CategoryCard({ category, index }: CategoryCardProps) {
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    HelpCircle,
    Phone,
    Mail,
    MessageCircle,
  };
  
  const IconComponent = iconMap[category.icon] || HelpCircle;
  
  return (
    <Link key={index} href={`#category-${category.key}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
            <IconComponent className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl">{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
