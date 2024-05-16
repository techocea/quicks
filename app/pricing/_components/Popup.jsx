import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";

export default function Popup({ subject, title, description }) {
  // const [formData,setFormData] = useState({
  //   name:"",
  //   email:"",
  //   contact:""
  // });
  // const handleInputChange=()=>{
  //   setFormData{...formData}
  // }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          {subject} <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold text-primary">
            {title}
          </DialogTitle>
          <DialogDescription className="py-4 text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 pb-4">
          <form method="POST">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="John Doe"
                required
                className="col-span-3 text-black"
              />
            </div>
          </form>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="john@gmail.com"
              required
              className="col-span-3 text-black"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input
              id="contact"
              defaultValue="07X-XXX XXXX"
              required
              className="col-span-3 text-black"
            />
          </div>
        </div>
        <DialogFooter className="flex flex-col items-center text-center">
          <Button type="submit" variant="default">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
