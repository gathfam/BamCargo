import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Destination {
    id: string | number;
    text: string;
}

export interface DestinationResponse {
    results: Destination[];
    error?: string;
}

export interface Cost {
    base_rate: number;
    charged_volume: number;
    charged_weight: number;
    city_destination: string;
    city_origin: string;
    cost: number;
    display_base_rate: string;
    display_cost: string;
    district_destination: string;
    district_origin: string;
    etd: string;
    min_volume: number;
    min_weight: number;
    notes: string;
    service: string;
    service_code: string;
    volume: number;
    volumetric_weight: number;
    weight: number;
}

export interface CostResult {
    costs: Cost[];
}

export interface LocationDetails {
    id: number | string;
    type: string;
    name: string;
}

export interface CostResponse {
    success: boolean;
    origin_details: LocationDetails;
    destination_details: LocationDetails;
    results: CostResult;
}
