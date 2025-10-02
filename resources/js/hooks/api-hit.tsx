import {
    Cost,
    CostMotor,
    CostMotorResponse,
    CostResponse,
    Destination,
    DestinationResponse,
    Receipt,
    ReceiptResponse,
} from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useDestinations(searchQuery: string) {
    const [destinations, setDestinations] = useState<Destination[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            // Jika query kosong atau terlalu pendek, reset data
            if (!searchQuery || searchQuery.length < 2) {
                setDestinations([]);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const response = await axios.get<DestinationResponse>(
                    '/api/getDestinationList',
                    {
                        params: { q: searchQuery },
                    },
                );
                setDestinations(response.data.results);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(
                        err.response?.data?.error ||
                            'Error fetching destinations',
                    );
                } else {
                    setError('An unexpected error occurred');
                }
                setDestinations([]);
            } finally {
                setLoading(false);
            }
        };

        // Debounce untuk menghindari request berlebihan
        const timeoutId = setTimeout(fetchDestinations, 500);

        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return { destinations, loading, error };
}

export function useCost(req: any | null) {
    const [costs, setCosts] = useState<Cost[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!req) return;

        let cancelled = false;

        const fetchCost = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.post<CostResponse>(
                    '/api/getCost',
                    req,
                );

                if (!cancelled) {
                    setCosts(data.results?.costs ?? []);
                }
            } catch (err: any) {
                if (!cancelled) {
                    if (axios.isAxiosError(err)) {
                        setError(
                            err.response?.data?.error || 'Error fetching costs',
                        );
                    } else {
                        setError('Unexpected error occurred');
                    }
                    setCosts([]);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchCost, 500);
        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [req]);

    return { costs, loading, error } as const;
}
export function useCostMtr(req: any | null) {
    const [costs, setCosts] = useState<CostMotor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!req) return;

        let cancelled = false;

        const fetchCost = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.post<CostMotorResponse>(
                    '/api/getMtrCost',
                    req,
                );
                if (!cancelled) {
                    // setCosts(data.results ?? []);
                    setCosts(data.results.costs ?? []);
                }
            } catch (err: any) {
                if (!cancelled) {
                    if (axios.isAxiosError(err)) {
                        setError(
                            err.response?.data?.error || 'Error fetching costs',
                        );
                    } else {
                        setError('Unexpected error occurred');
                    }
                    setCosts([]);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchCost, 500);
        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [req]);

    return { costs, loading, error } as const;
}

export function useResi(req: any | null) {
    const [data, setData] = useState<Receipt>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!req) return;

        let cancelled = false;

        const fetchCost = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.get<ReceiptResponse>(
                    `/api/getResi/${req.no_receipt}`,
                );

                if (!cancelled) {
                    setData(data.results.data ?? []);
                }
            } catch (err: any) {
                if (!cancelled) {
                    if (axios.isAxiosError(err)) {
                        setError(
                            err.response?.data?.error || 'Error fetching costs',
                        );
                    } else {
                        setError('Unexpected error occurred');
                    }
                    setData(data);
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchCost, 500);
        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [req]);

    return { data, loading, error } as const;
}