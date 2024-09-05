import React from "react";
import { Proposal } from "../../types/Proposal";
import { toFormattedDate, toFormattedDateAgo } from "../../utils/dateUtils";
import { sampleUser } from "../../sampleData";
import { Button } from "../ui/button";
import { FaRegWindowMaximize, FaWonSign } from "react-icons/fa";

interface Props {
  proposal: Proposal;
}

export default function ProposalCard({ proposal }: Props) {
  const priceDiff = proposal.price - proposal.order.price;
  const priceDiffStr = priceDiff >= 0 ? `+${priceDiff}` : `${priceDiff}`;

  const loginUser = sampleUser;

  const isSameUser = loginUser.userUUID === proposal.sender.userUUID;

  const cardOutline = {
    PENDING: "border",
    ACCEPTED: "border",
    REJECTED: "border",
  };

  const cardColor = isSameUser
    ? "bg-neutral-100"
    : "border border-yellow-500/75";

  return (
    <div
      className={`flex flex-col gap-2 ${cardColor} ${cardOutline} py-2 px-4 rounded-[6%] w-[240px]`}
    >
      {
        proposal.images.length !== 0 && <div></div>
        // image slider
      }
      <p>{proposal.message}</p>
      <div className="flex flex-col py-1 px-2">
        <div className="flex items-center gap-2">
          <FaWonSign />
          <p className="font-semibold">제안 가격</p>
        </div>
        <div className="flex justify-between">
          <p>{proposal.price}원</p>
          <p
            className={`${
              priceDiff === 0
                ? `text-gray-400`
                : priceDiff > 0
                ? `text-red-600`
                : `text-green-600`
            } font-semibold`}
          >
            {priceDiffStr}
          </p>
        </div>
      </div>
      <div className="flex flex-col py-1 px-2">
        <div className="flex items-center gap-2">
          <FaRegWindowMaximize />
          <p>{toFormattedDate(proposal.date.date, proposal.date.time)}</p>
        </div>
      </div>
      {!isSameUser && (
        <div className="flex justify-between gap-3 pb-2">
          <Button
            className="rounded-[10%] grow bg-amber-200 hover:bg-amber-300"
            variant="destructive"
          >
            수락
          </Button>
          <Button
            className="rounded-[10%] grow border border-red-100"
            variant="secondary"
          >
            거절
          </Button>
        </div>
      )}
    </div>
  );
}
