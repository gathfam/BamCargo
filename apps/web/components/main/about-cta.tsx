import { ArrowRight, Headphones } from "lucide-react";
import { Button } from "@bamcargo/ui/button";
import Link from "next/link";
import { Card } from "../../../../packages/ui/card";
import { CardContent } from "@bamcargo/ui/card";

export default function AboutCTA() {
  return (
    <Card className="rounded-xl  shadow-md  w-full">
      <CardContent>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center space-x-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600/10">
              <Headphones className="text-orange" size={32} />
            </div>
            <div>
              <h3 className="mb-1 text-xl font-black text-slate-900 dark:text-white">
                Ingin Bekerjasama dengan Kami?
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Tim kami siap membantu solusi logistik terbaik untuk kebutuhan
                bisnis Anda.
              </p>
            </div>
          </div>

          <Button
            variant={"outline"}
            asChild
            className="w-full whitespace-nowrap bg-slate-900 px-5 py-2.5 h-12 font-bold uppercase text-white transition-all hover:opacity-90 dark:bg-white dark:text-slate-900 hover:dark:text-white md:w-auto"
          >
            <Link href={"/hubungi-kami"}>Hubungi Tim Sales</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
