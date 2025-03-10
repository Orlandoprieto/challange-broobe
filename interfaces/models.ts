export interface MetricHistory {
   id: string
   url: string
   categories: {
      performance: Category;
      accessibility: Category;
      "best-practices": Category;
      seo: Category;
   };
   /*
   strategy_id: number;
   created_at: string;
   updated_at: string;*/
}

export interface Category {
   id: string;
   title: "Performance" | "Accessibility" | "Best Practices" | "PWA" | "SEO";
   auditRefs: AuditRefs[];
   score: number;
}

export interface AuditRefs {
   id: string;
   weight: number;
   group: string;
}

export interface Strategy {
   id: number;
   name: "DESKTOP" | "MOBILE";
}
