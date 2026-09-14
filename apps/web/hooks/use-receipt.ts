"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ReceiptService } from "@bamcargo/core";

export function useReceipt() {
  const [inputValue, setInputValue] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const { data, isLoading, error, refetch, isFetched } = useQuery({
    queryKey: ["receipt", receiptNumber],
    queryFn: () => ReceiptService.getByNumber(receiptNumber),
    enabled: receiptNumber !== "",
    retry: false,
  });

  // ── Handlers ─────────────────────────────────────────────────

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!isDirty) setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setIsDirty(false); // reset dirty state saat submit

    if (trimmed === receiptNumber) {
      // nomor sama → force refetch
      refetch();
    } else {
      // nomor baru → update queryKey → query otomatis jalan
      setReceiptNumber(trimmed);
    }
  };

  // ── Derived state ─────────────────────────────────────────────

  // Sembunyikan error kalau user sudah mulai ketik nomor lain
  const showError = error && !isDirty;

  return {
    // State
    inputValue,
    data,
    error,
    isLoading,
    isFetched,
    showError,

    // Handlers
    handleInputChange,
    handleSubmit,
  };
}