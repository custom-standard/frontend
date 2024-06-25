import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { sampleOrders } from "../../sampleData";
import OrderBannerItem from "./OrderBannerItem";

export default function OrderBanner() {
  const [orders, setOrders] = useState(sampleOrders);

  const fetchInProgressOrder = () => {};

  return (
    <div className="flex flex-col items-center">
      <div className="w-[90%]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {orders.map((order) => (
              <CarouselItem className="mb-4">
                <OrderBannerItem order={order} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
}
