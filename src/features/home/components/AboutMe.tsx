import { Caption, Stack } from '@/components';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <Stack>
      <div className="flex flex-col gap-12">
        <div className="flex items-center gap-3 sm:gap-6">
          <Image src={'/profile.jpg'} alt={''} width={70} height={70} />
          <div>
            <h1
              className="font-serif text-lg font-bold text-(--home-foreground)
                uppercase sm:text-2xl"
            >
              marco muralles
            </h1>
            <Caption className="mb-0">Lorem ipsum dolor sit amet elit.</Caption>
          </div>
        </div>

        <p className="text-base sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit voluptate officia enim, illo suscipit illum vero soluta
          autem ducimus fuga.
        </p>
      </div>
    </Stack>
  );
};

// export const AboutMe = () => {
//   return (
//     <Stack
//       className="mt-0 flex flex-col-reverse gap-8 text-center sm:grid
//         sm:grid-cols-[2fr_1fr] sm:text-left"
//     >
//       <div className="flex flex-col gap-8 sm:gap-12">
//         <h1
//           className="font-serif text-4xl leading-12 font-bold
//             text-(--home-foreground) uppercase"
//         >
//           marco vini muralles
//         </h1>

//         <p className="mb-2 text-base sm:text-xl">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Reprehenderit voluptate officia enim, illo suscipit illum vero soluta
//           autem ducimus fuga.
//         </p>
//         <SocialLinksCarousel />
//       </div>
//       <div className="self-center justify-self-end">
//         <Image
//           src={'/profile.jpg'}
//           alt={''}
//           width={80}
//           height={80}
//           // className="rounded-[80%]"
//         />
//       </div>
//     </Stack>
//   );
// };
