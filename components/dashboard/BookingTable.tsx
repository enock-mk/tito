// components/dashboard/BookingTable.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Booking } from '@/data/dashboard';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';

interface BookingTableProps {
  bookings: Booking[];
  className?: string;
  onView?: (booking: Booking) => void;
  onEdit?: (booking: Booking) => void;
  onDelete?: (booking: Booking) => void;
}

export function BookingTable({
  bookings,
  className,
  onView,
  onEdit,
  onDelete,
}: BookingTableProps) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const getStatusColor = (status: Booking['status']) => {
    const colors = {
      confirmed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      pending: 'bg-main-yellow-100 text-main-yellow-700 dark:bg-main-yellow-900/30 dark:text-main-yellow-400',
      cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      completed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    };
    return colors[status];
  };

  return (
    <div className={cn('rounded-2xl border bg-white dark:border-neutral-800 dark:bg-neutral-900', className)}>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Customer</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking, index) => (
            <motion.tr
              key={booking.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="cursor-pointer transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800"
              onMouseEnter={() => setHoveredRow(booking.id)}
              onMouseLeave={() => setHoveredRow(null)}
            >
              <TableCell>
                <div>
                  <p className="font-medium">{booking.customer}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {booking.email}
                  </p>
                </div>
              </TableCell>
              <TableCell className="text-sm">{booking.service}</TableCell>
              <TableCell className="text-sm">
                {new Date(booking.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    'font-normal',
                    getStatusColor(booking.status)
                  )}
                >
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-medium">
                {booking.amount}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        'h-8 w-8 transition-opacity',
                        hoveredRow === booking.id ? 'opacity-100' : 'opacity-0'
                      )}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => onView?.(booking)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit?.(booking)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => onDelete?.(booking)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}