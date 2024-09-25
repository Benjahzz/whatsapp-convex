import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { api } from "@/convex/_generated/api";
import { useUpdateUser } from "@/features/auth/api/use-update-user";
import { useMutation } from "convex/react";
import { useRef } from "react";
import AvatarEditor from "react-avatar-editor";

interface ImageCropProps {
  imageSrc: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: (image: File) => void;
}

const ImageCrop: React.FC<ImageCropProps> = ({ imageSrc, open, setOpen,onConfirm }) => {



  const editorRef = useRef<AvatarEditor>(null);

  const onConfirmImage = async () => {
    if (editorRef.current) {
      const dataUrl = editorRef.current.getImageScaledToCanvas().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();

      const selectedImage = new File([blob], "image.png", {
        type: "image/png",
      });

      onConfirm(selectedImage);
      
      
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent showCloseButton={false}>
        <AvatarEditor
          style={{ width: "100%", height: "100%" }}
          className="object-contain"
          width={500}
          height={500}
          image={imageSrc}
          border={50}
          scale={1.2}
          rotate={0}
          ref={editorRef}
        />
        <Button className="mt-4" onClick={onConfirmImage}>
          Guardar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCrop;
