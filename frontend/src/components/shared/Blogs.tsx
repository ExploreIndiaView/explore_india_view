import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BLOGS } from "../../services/Options";

function Blogs() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 " id="blogs">
      <h2 className="text-3xl font-bold text-center mb-8">Travel Blogs</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full px-5"
      >
        <CarouselContent className="flex py-4">
          {BLOGS.map((blog, idx) => (
            <CarouselItem key={idx} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2">
              <div className="bg-white rounded-lg shadow-md p-5 h-full flex flex-col justify-between font-medium">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {blog.BlogTitle}
                  </h3>
                  <p className="text-purple-600 font-medium mb-1">
                    {blog.MetaTitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    {blog.MetaDescription}
                  </p>
                  <p className="text-gray-500 text-xs">{blog.ContentSummary}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Blogs;
