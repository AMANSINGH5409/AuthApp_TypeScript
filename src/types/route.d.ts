import React from "react";
import type { RouteUrl } from "../utils/constants";
import type { RouteProps } from "react-router-dom";

export interface RouteConfig {
  title: string;
  path: RouteUrl;
  guard?: React.FC<T>;
  guardProps?: {
    allowedFor: string;
  };
  component: React.FC;
  layout?: React.FC;
  caseSensitive?: boolean;
  index?: boolean;
  routes?: Array<Omit<RouteConfig, "guard" | "guardProps">>;
}
