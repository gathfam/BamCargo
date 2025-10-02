import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useResi } from '@/hooks/api-hit';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { InputBase, InputBaseControl, InputBaseInput } from './ui/input-base';
import { Separator } from '@radix-ui/react-separator';
import { toast } from 'sonner';

// Inline simple debounce jika useDebounce tidak ada
function useSimpleDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debouncedValue;
}

interface CekOngkirMotorFormProps extends React.ComponentProps<'div'> {}

export function CekResi({ className, ...props }: CekOngkirMotorFormProps) {
    const [NoResi, setNoResi] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [req, setReq] = useState<any | null>(null);
    const { data, loading, error } = useResi(req);

    // Handle when no cost is returned

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const submitData = {
            no_receipt: NoResi ? parseFloat(NoResi) : 0,
        };

        // trigger the hook to fetch
        setReq(submitData);
        setIsSubmitted(true);
    };
    console.log(data);
    useEffect(() => {
        if (data === undefined && isSubmitted) {
            toast.warning("Data Resi Tidak Ditemukan!")
        }
    }, [data]);

    const handleButtonClick = (e: React.MouseEvent) => {
        // Trigger submit manual
        const form = (e.target as HTMLElement).closest('form');
        if (form) {
            form.requestSubmit();
        }
    };
    const statusCodeTranslation: Record<string, string> = {
        de: 'Entri Data',
        mn: 'Manifestasi ke Kab. Kapuas',
        od: 'Dalam Pengiriman ke Kab. Kapuas',
        rd: 'Diterima di Kab. Kapuas',
        dl: 'Diterima',
    };

    const isButtonDisabled = loading || !NoResi;

    return (
        <div className={cn('flex w-full flex-col gap-6', className)} {...props}>
            <Card>
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-5">
                            {/* Kota Asal */}

                            {/* Berat */}
                            <div className="mb-5">
                                <Label
                                    htmlFor="NoResi"
                                    className="mb-2 block text-sm font-medium"
                                >
                                    Nomor Resi
                                </Label>
                                <InputBase>
                                    <InputBaseControl>
                                        <InputBaseInput
                                            id="NoResi"
                                            type="number"
                                            placeholder="0"
                                            value={NoResi}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setNoResi(val);
                                            }}
                                            min="0"
                                            step="0.1"
                                        />
                                    </InputBaseControl>
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
                            {loading ? 'Memuat...' : 'Track Resi'}
                        </Button>
                        <div className="w-[200%]"></div>
                    </form>
                    {loading ? (
                        null
                    ) : error ? (
                        null
                    ) : data ? (
                        <div className="mt-5 flex flex-col space-y-5 sm:grid sm:grid-cols-3">
                            <div className="col-span-1  space-y-2">
                                <p className="text-sm text-gray-400">
                                    Nomor Resi <br />{' '}
                                    <span className="text-base text-black">
                                        {data.number}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-400">
                                    Layanan <br />{' '}
                                    <span className="text-base text-black">
                                        {data.service}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-400">
                                    Pengirim
                                    <div className="flex flex-col -space-y-1">
                                        <span className="text-base text-black">
                                            {data.consignor}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {data.origin}
                                        </span>
                                    </div>
                                </p>
                                <p className="text-sm text-gray-400">
                                    Penerima
                                    <div className="flex flex-col -space-y-1">
                                        <span className="text-base text-black">
                                            {data.consignee}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {data.destination}
                                        </span>
                                    </div>
                                </p>
                            </div>
                            <div className="col-span-2 flex flex-col items-end">
                                {/* <p className='self-center'>Status: {data.status}</p> */}
                                <Separator />
                                <ul>
                                    {data.progress
                                        .slice() // Create a shallow copy to reverse without mutating original data
                                        .reverse() // Reverse the progress array to display from latest to earliest
                                        .map((progressItem, i) => {
                                            // Split the time into day, month, year, and time
                                            const [datePart, timePart] =
                                                progressItem.time.split(' '); // Split "02-01-2023 13:46" into date and time parts
                                            const [day, month, year] =
                                                datePart.split('-'); // Split "02-01-2023" into day, month, year
                                            const [hours, minutes] =
                                                timePart.split(':');

                                            const formattedDate = new Date(
                                                `${year}-${month}-${day}`,
                                            );
                                            let formatMonth =
                                                new Intl.DateTimeFormat('en', {
                                                    month: 'short',
                                                }).format(formattedDate);
                                            return (
                                                <div
                                                    key={progressItem.id}
                                                    className="mb-2 ml-6 flex items-start"
                                                >
                                                    {/* Circle for the timeline step */}
                                                    <div className="flex flex-col justify-end text-end text-xs">
                                                        {/* Display the split components */}
                                                        <p>
                                                            {day}, {formatMonth}
                                                        </p>
                                                        <p>
                                                            {hours}:{minutes}
                                                        </p>
                                                        <br />
                                                    </div>
                                                    <div className="mt-1 mr-5 ml-2 flex flex-col items-center justify-center space-y-2">
                                                        <div
                                                            className={`h-3 w-3 rounded-full border-2 border-white ${i != 0 ? 'bg-gray-200' : 'bg-green-500'}`}
                                                        />
                                                        <div
                                                            className={`${i == data.progress.length - 1 ? 'hidden' : 'h-10 w-0 border-l border-gray-200'}`}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        {/* Status with translation */}
                                                        <strong className="text-sm text-gray-700">
                                                            {statusCodeTranslation[
                                                                progressItem
                                                                    .status_code
                                                            ] ||
                                                                progressItem.status}
                                                        </strong>
                                                        {/* Location and Time */}
                                                        <div className="flex items-center text-xs text-gray-500">
                                                            <span className="mr-2">
                                                                {
                                                                    progressItem.stop
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        null
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
