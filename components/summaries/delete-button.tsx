'use client';

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { deleteSummaryAction } from "@/actions/summary-action";
import { toast } from "sonner";

interface DeleteButtonProps {
    summaryId: string;
}

export default function DeleteButton(summaryId: DeleteButtonProps) {
    const [open, setOpen] = useState(false);
    const [isPending, setTransition] = useTransition();

    const handleDelete = async () => {
        setTransition(async () => {
            // Delete Summary
            const result = await deleteSummaryAction(summaryId);

            if (!result.success) {
                toast.error('❌ Error', {
                    description: 'Unable to delete your summary.'
                })
            }
            setOpen(false);
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant={'ghost'} size='icon' className="text-gray-400 bg-gray-50 border border-gray-200
            hover:text-rose-500 hover:bg-rose-50">
                <Trash2 className="h-4 w-4"/>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>Delete Summary</DialogTitle>
            <DialogDescription>
                Are you sure you want to delete this summary? This action cannot be undone.
            </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button variant='ghost' className="px-2 bg-gray-50 border border-gray-200
                hover:text-gray-600 hover:bg-gray-100" 
                onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button variant='destructive' className="bg-gray-900 hover:bg-gray-800"
                onClick={handleDelete}>
                    {isPending ? 'Deleting...' : 'Delete'}
                </Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}