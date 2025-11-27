import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface PreviewImageProps {
  openPreview: boolean;
  setOpenPreview: React.Dispatch<React.SetStateAction<boolean>>;
  imageUrl: string;
  title: string;
  id: string;
}

export function PreviewImageProduct(props: PreviewImageProps) {
  const { openPreview, setOpenPreview, imageUrl, title, id } = props;
  return (
    <Dialog open={openPreview} onOpenChange={setOpenPreview}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle className="wrap-break-word pr-2">{title}</DialogTitle>
          <DialogDescription>Product Number: {id}</DialogDescription>
        </DialogHeader>
        <Image
          width={300}
          height={300}
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </DialogContent>
    </Dialog>
  );
}
