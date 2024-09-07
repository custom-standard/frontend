import React from "react";
import { Proposal } from "../../types/Proposal";
import { toFormattedDate, toFormattedDateAgo } from "../../utils/dateUtils";
import { sampleUser } from "../../sampleData";
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

  const cardColor = isSameUser ? "bg-neutral-100" : "bg-amber-100/40";

  return (
    <div
      className={`flex flex-col gap-4 ${cardColor} ${cardOutline} py-2 px-4 rounded-[10px] w-[400px] border border-amber-900/10`}
    >
      <div className="flex flex-col gap-2">
        {
          proposal.images.length !== 0 && <div></div>
          // image slider
        }
        <p>{proposal.message}</p>
        <div className="flex gap-4 justify-between">
          <div className="grow flex items-center gap-2">
            <FaWonSign />
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
          <div className="grow flex items-center gap-2">
            <FaRegWindowMaximize />
            <p>{toFormattedDate(proposal.date.date, proposal.date.time)}</p>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        {!isSameUser && (
          <div className="flex justify-between gap-2 pb-2">
            <button className="w-[4em] h-[2em] text-sm font-[500] rounded-[10%] bg-amber-200 hover:bg-amber-300 transition-all">
              수락
            </button>
            <button className="w-[4em] h-[2em] text-sm font-[500] rounded-[10%] border border-amber-400 bg-white hover:bg-amber-300 transition-all">
              거절
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
