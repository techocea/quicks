import {
  ChevronRight,
  DatabaseBackupIcon,
  FolderSyncIcon,
  Headset,
  PrinterIcon,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const freebiesList = [
  {
    id: 1,
    icon: <Headset />,
    title: "24*7 Tech Support",
    point: "Standard Hosting Plans come with 5GB of storage per user.",
  },
  {
    id: 2,
    icon: <DatabaseBackupIcon />,
    title: "Daily Data Backup",
    point: "Dedicated Hosting Plans come with 6GB of storage per user.",
  },
  {
    id: 3,
    icon: <FolderSyncIcon />,
    title: "Data Migration",
    point: "You can get additional storage at $1 per 1 GB.",
  },
  {
    id: 4,
    icon: <PrinterIcon />,
    title: "Universal Printing",
    point:
      "Integrate popular QuickBooks Add-ons and Third-party apps at no additional cost.",
  },
];
