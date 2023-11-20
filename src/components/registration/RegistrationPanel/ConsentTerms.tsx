import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ConsentTerms() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="font-normal text-base font-sans">
        Consultar Termos
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-normal text-base font-sans text-theme-secondary-base">
            Termos do Pipoca
          </AlertDialogTitle>
          <AlertDialogDescription className="font-normal text-base font-sans text-theme-grayscale-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            veritatis. Libero, illo. Odio architecto ipsum quam aliquam nulla
            nesciunt ut obcaecati dignissimos, facilis porro, eligendi quasi
            expedita autem earum nostrum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam reprehenderit, impedit voluptatem,
            doloremque perspiciatis iusto officiis eligendi neque quam natus
            magnam dolor maiores deserunt dolores, voluptas quo nemo
            voluptatibus consectetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A corporis, labore sed delectus quis rerum, cumque
            sint aliquam repellat fugiat fuga? Doloribus natus quibusdam
            molestias reprehenderit eum cumque obcaecati facere? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Esse doloremque modi,
            velit et, mollitia incidunt alias deleniti perferendis architecto
            eos ipsam voluptate non debitis id voluptatum sit fuga excepturi
            aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur dolore non odio perspiciatis. Optio ab, ducimus atque
            neque cumque quo dolorem fuga sequi odio quam tempore error enim
            temporibus! Tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse, iure. Beatae, vitae nulla excepturi
            molestiae quas harum magni veniam quae repellendus dolor laborum
            iure animi dignissimos voluptatem eveniet eum sit. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Iure aliquam
            praesentium incidunt cupiditate, fuga, neque libero cumque, nesciunt
            quibusdam corrupti modi possimus eius minima ipsum et commodi fugit
            soluta quasi.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="font-normal text-base font-sans bg-theme-secondary-base hover:bg-theme-secondary-dark">
            Voltar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
