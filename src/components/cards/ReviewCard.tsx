import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Review } from "../../types/Review";
import Profile from "../user/Profile";

interface Props {
  review: Review;
}

export default function ReviewCard({ review }: Props) {
  return (
    <Card className="h-[240px]" style={{ boxShadow: "none" }}>
      <CardContent className="p-4">
        {review.images.length != 0 ? (
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <div className="h-full">
                <img src={review.images[0]} className="h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between gap-1">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-[20px] h-[20px] rounded-full ${
                      index < review.rating
                        ? "bg-yellow-500"
                        : "border border-yellow-500"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <Profile size="sm" user={review.writer} link={true} />
            <div
              className="text-sm text-neutral-600"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 2,
              }}
            >
              {review.description}
            </div>
          </div>
        ) : (
          <div className="flex gap-8">
            <div className="flex flex-col flex-grow gap-3">
              <Profile size="sm" user={review.writer} link={true} />
              <div
                className="text-sm text-neutral-600"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: 8,
                }}
              >
                {review.description}
              </div>
            </div>
            <div className="flex flex-col gap-1 justify-start">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className={`w-[20px] h-[20px] rounded-full ${
                    index < review.rating
                      ? "bg-yellow-500"
                      : "border border-yellow-500"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
