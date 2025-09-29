import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useCost, useDestinations } from '@/hooks/cek-ongkir';
import { cn } from '@/lib/utils';
import { Destination } from '@/types';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { toast } from 'sonner';
import {
    InputBase,
    InputBaseAdornment,
    InputBaseControl,
    InputBaseInput,
} from './ui/input-base';

// Inline simple debounce jika useDebounce tidak ada
function useSimpleDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}

interface CekOngkirFormProps extends React.ComponentProps<'div'> {}

export function CekOngkirForm({ className, ...props }: CekOngkirFormProps) {
    const [berat, setBerat] = useState<string>('');
    const [panjang, setPanjang] = useState<string>('');
    const [lebar, setLebar] = useState<string>('');
    const [tinggi, setTinggi] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [selectedOrigin, setSelectedOrigin] = useState<Destination | null>(
        null,
    );
    const [selectedDestination, setSelectedDestination] =
        useState<Destination | null>(null);

    const [originQuery, setOriginQuery] = useState<string>('');
    const [destinationQuery, setDestinationQuery] = useState<string>('');

    const debouncedOriginQuery = useSimpleDebounce(originQuery, 300);
    const debouncedDestinationQuery = useSimpleDebounce(destinationQuery, 300);

    const {
        destinations: originOptions,
        loading: originLoading,
        error: originError,
    } = useDestinations(debouncedOriginQuery);
    const {
        destinations: destinationOptions,
        loading: destinationLoading,
        error: destinationError,
    } = useDestinations(debouncedDestinationQuery);

    const formatOptions = (destinations: Destination[]) => {
        return destinations.map((dest) => ({
            value: dest.id,
            label: dest.text,
            data: dest,
        }));
    };

    const originSelectOptions = formatOptions(originOptions);
    const destinationSelectOptions = formatOptions(destinationOptions);

    const handleOriginInputChange = (inputValue: string, actionMeta: any) => {
        setOriginQuery(inputValue);
    };

    const handleDestinationInputChange = (
        inputValue: string,
        actionMeta: any,
    ) => {
        setDestinationQuery(inputValue);
    };

    const handleOriginChange = (selectedOption: any) => {
        setSelectedOrigin(selectedOption?.data || null);
        if (selectedOption?.data) {
            setOriginQuery(selectedOption.data.text);
        } else {
            setOriginQuery('');
        }
    };

    const handleDestinationChange = (selectedOption: any) => {
        setSelectedDestination(selectedOption?.data || null);
        if (selectedOption?.data) {
            setDestinationQuery(selectedOption.data.text);
        } else {
            setDestinationQuery('');
        }
    };

    useEffect(() => {
        if (selectedOrigin) {
            setOriginQuery(selectedOrigin.text);
        }
    }, [selectedOrigin]);

    useEffect(() => {
        if (selectedDestination) {
            setDestinationQuery(selectedDestination.text);
        }
    }, [selectedDestination]);

    const [req, setReq] = useState<any | null>(null);

    const { origin, destination, costs, loading, error } = useCost(req);

    // Handle when no cost is returned

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedOrigin || !selectedDestination) {
            alert('Harap masukkan kota/kabupaten asal & tujuan.');
            return;
        }

        const weight = parseFloat(berat);
        if (isNaN(weight) || weight <= 0) {
            alert('Harap masukkan berat valid (>0).');
            return;
        }

        const submitData = {
            orig_id: selectedOrigin.id,
            dest_id: selectedDestination.id,
            weight,
            length: panjang ? parseFloat(panjang) : 0,
            width: lebar ? parseFloat(lebar) : 0,
            height: tinggi ? parseFloat(tinggi) : 0,
        };

        // trigger the hook to fetch
        setReq(submitData);
        setIsSubmitted(true);
    };
    useEffect(() => {
        if (costs && costs.length === 0 && isSubmitted) {
            toast.warning(
                `Tarif tidak ditemukan untuk pengiriman dari ${selectedOrigin?.text} Ke ${selectedDestination?.text}`,
            );
        }
    }, [costs]);

    const handleButtonClick = (e: React.MouseEvent) => {
        // Trigger submit manual
        const form = (e.target as HTMLElement).closest('form');
        if (form) {
            form.requestSubmit();
        }
    };

    const isButtonDisabled =
        originLoading ||
        destinationLoading ||
        !selectedOrigin ||
        !selectedDestination ||
        !berat ||
        loading ||
        !panjang ||
        !lebar ||
        !tinggi;
    isNaN(parseFloat(berat));

    return (
        <div className={cn('flex w-[80%] flex-col gap-6', className)} {...props}>
            <Card>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-5">
                            {/* Kota Asal */}
                            <div className="flex-1">
                                <Label
                                    htmlFor="kota-asal"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Kota/Kab. Asal
                                </Label>
                                <Select
                                    id="kota-asal"
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isDisabled={false}
                                    isLoading={originLoading}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="origin"
                                    options={originSelectOptions}
                                    value={
                                        selectedOrigin
                                            ? {
                                                  value: selectedOrigin.id,
                                                  label: selectedOrigin.text,
                                                  data: selectedOrigin,
                                              }
                                            : null
                                    }
                                    onChange={handleOriginChange}
                                    onInputChange={handleOriginInputChange}
                                    placeholder="Ketik nama kota asal..."
                                    noOptionsMessage={({ inputValue }) =>
                                        inputValue
                                            ? 'Kota tidak ditemukan'
                                            : 'Ketik untuk mencari kota'
                                    }
                                    loadingMessage={() => 'Mencari kota...'}
                                />
                                {originError && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {originError}
                                    </p>
                                )}
                            </div>

                            {/* Kota Tujuan */}
                            <div className="flex-1">
                                <Label
                                    htmlFor="kota-tujuan"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Kota/Kab. Tujuan
                                </Label>
                                <Select
                                    id="kota-tujuan"
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isDisabled={false}
                                    isLoading={destinationLoading}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="destination"
                                    options={destinationSelectOptions}
                                    value={
                                        selectedDestination
                                            ? {
                                                  value: selectedDestination.id,
                                                  label: selectedDestination.text,
                                                  data: selectedDestination,
                                              }
                                            : null
                                    }
                                    onChange={handleDestinationChange}
                                    onInputChange={handleDestinationInputChange}
                                    placeholder="Ketik nama kota tujuan..."
                                    noOptionsMessage={({ inputValue }) =>
                                        inputValue
                                            ? 'Kota tidak ditemukan'
                                            : 'Ketik untuk mencari kota'
                                    }
                                    loadingMessage={() => 'Mencari kota...'}
                                />
                                {destinationError && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {destinationError}
                                    </p>
                                )}
                            </div>

                            {/* Berat */}
                            <div>
                                <Label
                                    htmlFor="berat"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Berat
                                </Label>
                                <InputBase>
                                    <InputBaseControl>
                                        <InputBaseInput
                                            id="berat"
                                            type="number"
                                            placeholder="0"
                                            value={berat}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setBerat(val);
                                            }}
                                            min="0"
                                            step="0.1"
                                        />
                                    </InputBaseControl>
                                    <InputBaseAdornment className="text-sm">
                                        Kg
                                    </InputBaseAdornment>
                                </InputBase>
                                <p className="mt-1 text-xs text-gray-500">
                                    Masukkan berat barang dalam kilogram
                                </p>
                            </div>

                            {/* Dimensi */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label
                                        htmlFor="panjang"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Panjang
                                    </Label>
                                    <InputBase>
                                        <InputBaseControl>
                                            <InputBaseInput
                                                id="panjang"
                                                type="number"
                                                placeholder="0"
                                                value={panjang}
                                                onChange={(e) =>
                                                    setPanjang(e.target.value)
                                                }
                                                min="0"
                                            />
                                        </InputBaseControl>
                                        <InputBaseAdornment className="hidden text-sm sm:block">
                                            Cm
                                        </InputBaseAdornment>
                                    </InputBase>
                                </div>

                                {/* Serupa untuk lebar dan tinggi */}
                                <div>
                                    <Label
                                        htmlFor="lebar"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Lebar
                                    </Label>
                                    <InputBase>
                                        <InputBaseControl>
                                            <InputBaseInput
                                                id="lebar"
                                                type="number"
                                                placeholder="0"
                                                value={lebar}
                                                onChange={(e) =>
                                                    setLebar(e.target.value)
                                                }
                                                min="0"
                                            />
                                        </InputBaseControl>
                                        <InputBaseAdornment className="hidden text-sm sm:block">
                                            Cm
                                        </InputBaseAdornment>
                                    </InputBase>
                                </div>
                                <div>
                                    <Label
                                        htmlFor="tinggi"
                                        className="mb-2 block text-sm font-medium"
                                    >
                                        Tinggi
                                    </Label>
                                    <InputBase>
                                        <InputBaseControl>
                                            <InputBaseInput
                                                id="tinggi"
                                                type="number"
                                                placeholder="0"
                                                value={tinggi}
                                                onChange={(e) =>
                                                    setTinggi(e.target.value)
                                                }
                                                min="0"
                                            />
                                        </InputBaseControl>
                                        <InputBaseAdornment className="hidden text-sm sm:block">
                                            Cm
                                        </InputBaseAdornment>
                                    </InputBase>
                                </div>
                            </div>

                            {/* Button */}
                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                size="lg"
                                disabled={isButtonDisabled}
                                onClick={handleButtonClick}
                            >
                                {originLoading || destinationLoading || loading
                                    ? 'Memuat...'
                                    : 'Cek Ongkir'}
                            </Button>
                        </div>
                    </form>
                    {/* Table display */}
                    {costs.length == 0 ? null : (
                        <>
                            <div className="overflow-x-auto">
                                <h4 className="my-5 scroll-m-20 text-xl font-semibold tracking-tight">
                                    Biaya Berdasarkan Berat
                                </h4>
                                <table className="w-full table-auto border-collapse">
                                    <thead>
                                        <tr className="border-b text-left text-sm text-gray-600">
                                            <th className="px-2 py-3">
                                                Layanan
                                            </th>
                                            <th className="px-2 py-3">
                                                Berat Aktual
                                            </th>
                                            <th className="px-2 py-3">
                                                Berat Volumetrik
                                            </th>
                                            <th className="px-2 py-3">
                                                Berat Min.
                                            </th>
                                            <th className="px-2 py-3">
                                                Berat Dipakai
                                            </th>
                                            <th className="px-2 py-3">
                                                Biaya Kirim
                                            </th>
                                            <th className="px-2 py-3">SLA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {costs.map((r, idx) =>
                                            r.service ==
                                            'Less Container Load' ? null : (
                                                <tr
                                                    key={r.service}
                                                    className={
                                                        idx % 2 === 0
                                                            ? 'bg-white'
                                                            : 'bg-gray-50'
                                                    }
                                                >
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.service}
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.weight}Kg
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.volumetric_weight}Kg
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.min_weight}Kg
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.charged_weight}Kg
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm font-medium">
                                                        {r.display_cost}
                                                    </td>
                                                    <td className="border-t px-2 py-4 text-sm">
                                                        {r.etd} Hari
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="overflow-x-auto">
                                <h4 className="my-5 scroll-m-20 text-xl font-semibold tracking-tight">
                                    Biaya Berdasarkan Volume
                                </h4>
                                <table className="w-full table-auto border-collapse">
                                    <thead>
                                        <tr className="border-b text-left text-sm text-gray-600">
                                            <th className="px-2 py-3">
                                                Layanan
                                            </th>
                                            <th className="px-2 py-3">
                                                Volume Aktual
                                            </th>
                                            <th className="px-2 py-3">
                                                Volume Min.
                                            </th>
                                            <th className="px-2 py-3">
                                                Volume Dipakai
                                            </th>
                                            <th className="px-2 py-3">
                                                Biaya Kirim
                                            </th>
                                            <th className="px-2 py-3">Etd.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {costs.map((r, idx) =>
                                            r.service !=
                                            'Less Container Load' ? null : (
                                                <tr
                                                    key={r.service}
                                                    className={
                                                        idx % 2 === 0
                                                            ? 'bg-white'
                                                            : 'bg-gray-50'
                                                    }
                                                >
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.service}
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.volume}m3
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.min_volume}m3
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm">
                                                        {r.charged_volume}
                                                        Kg
                                                    </td>
                                                    <td className="border-t border-r px-2 py-4 text-sm font-medium">
                                                        {r.display_cost}
                                                    </td>
                                                    <td className="border-t px-2 py-4 text-sm">
                                                        {r.etd} Hari
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
