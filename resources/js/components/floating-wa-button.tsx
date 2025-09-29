import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export function FloatingWhatsAppIcon() {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=628998020606&text=Hallo+admin%2C+bisa+tahu+info+tarif+pengiriman+paket+cargo%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button
                variant="secondary"
                size={'icon'}
                className="fixed right-5 bottom-25 size-16 rounded-full bg-[#25d366] shadow-2xl hover:bg-[#3ddb77]"
            >
                <FaWhatsapp className="size-10" color="#fff" />
            </Button>
        </a>
    );
}
