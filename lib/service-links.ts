export const serviceLinks = {
  "designer wallpaper": "/services/designer-wallpaper",
  "imported wallpaper": "/services/imported-wallpaper",
  "wooden flooring": "/services/wooden-flooring",
  "pvc vinyl flooring": "/services/pvc-vinyl-flooring",
  "pvc carpet tiles": "/services/pvc-carpet-tiles",
  "woollen carpet": "/services/woollen-carpet",
  "roller blinds": "/services/roller-vertical-blinds",
  "sun control films": "/services/sun-control-films",
  "artificial grass": "/services/artificial-grass",
  "interior painting": "/services/interior-painting",
  "false ceiling": "/services/pop-false-ceiling",
  "interior contracting": "/services/complete-interior-contracting",
} as const;

export type ServiceKeyword = keyof typeof serviceLinks;
