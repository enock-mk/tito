// components/dashboard/ChartCard.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, Calendar, TrendingUp } from 'lucide-react';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color: string;
  }[];
}

interface ChartCardProps {
  title: string;
  description?: string;
  data: ChartData;
  className?: string;
  index?: number;
  type?: 'line' | 'bar' | 'area';
  height?: number;
}

export function ChartCard({
  title,
  description,
  data,
  className,
  index = 0,
  type = 'line',
  height = 200,
}: ChartCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeDataset, setActiveDataset] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState<'7d' | '14d' | '30d'>('7d');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartWidth = canvas.width - padding.left - padding.right;
    const chartHeight = canvas.height - padding.top - padding.bottom;

    // Find max value for scaling
    let maxValue = 0;
    data.datasets.forEach((dataset) => {
      const max = Math.max(...dataset.data);
      if (max > maxValue) maxValue = max;
    });
    maxValue = Math.ceil(maxValue / 10) * 10 + 10;

    // Draw grid
    ctx.strokeStyle = 'rgba(0,0,0,0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartHeight / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(canvas.width - padding.right, y);
      ctx.stroke();
    }

    // Draw datasets
    data.datasets.forEach((dataset, datasetIndex) => {
      const isActive = activeDataset === null || activeDataset === datasetIndex;
      if (!isActive) return;

      const color = dataset.color || '#2563EB';
      const points = dataset.data.map((value, i) => {
        const x = padding.left + (i / (dataset.data.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - (value / maxValue) * chartHeight;
        return { x, y };
      });

      // Draw area (for area chart)
      if (type === 'area') {
        ctx.beginPath();
        ctx.moveTo(points[0].x, canvas.height - padding.bottom);
        points.forEach((point) => ctx.lineTo(point.x, point.y));
        ctx.lineTo(points[points.length - 1].x, canvas.height - padding.bottom);
        ctx.closePath();
        const gradient = ctx.createLinearGradient(0, padding.top, 0, canvas.height - padding.bottom);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, color + '00');
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Draw line
      ctx.beginPath();
      points.forEach((point, i) => {
        if (i === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          // Smooth curve
          const prev = points[i - 1];
          const cp1x = (prev.x + point.x) / 2;
          const cp1y = prev.y;
          const cp2x = (prev.x + point.x) / 2;
          const cp2y = point.y;
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, point.x, point.y);
        }
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    });

    // Draw labels
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.font = '10px system-ui';
    ctx.textAlign = 'center';
    data.labels.forEach((label, i) => {
      const x = padding.left + (i / (data.labels.length - 1)) * chartWidth;
      ctx.fillText(label, x, canvas.height - 10);
    });

    // Draw y-axis labels
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
      const value = maxValue - (maxValue / 4) * i;
      const y = padding.top + (chartHeight / 4) * i;
      ctx.fillText(value.toString(), padding.left - 8, y + 4);
    }
  }, [data, type, activeDataset, height]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border p-0.5 dark:border-neutral-800">
            {(['7d', '14d', '30d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={cn(
                  'rounded px-3 py-1 text-xs font-medium transition-all',
                  timeRange === range
                    ? 'bg-primary text-white'
                    : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                )}
              >
                {range}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4">
        <canvas
          ref={canvasRef}
          width={600}
          height={height}
          className="w-full"
        />
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {data.datasets.map((dataset, index) => (
          <button
            key={index}
            onClick={() => setActiveDataset(activeDataset === index ? null : index)}
            className="flex items-center gap-2 rounded-lg px-2 py-1 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: dataset.color }}
            />
            <span className="text-xs font-medium">{dataset.label}</span>
            <span className="text-xs text-neutral-500">
              {dataset.data.reduce((a, b) => a + b, 0)}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}