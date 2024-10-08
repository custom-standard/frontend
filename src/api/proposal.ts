import { authApi } from ".";
import { Proposal, ProposalCreateRequest } from "../types/Proposal";
import { BASE_URL, ENDPOINT } from "./url";

export const readProposalAll = async (orderId: number) => {
  const response = await authApi().get(
    BASE_URL + ENDPOINT.PROPOSAL_ALL + `?orderId=${orderId}`
  );
  return response.data.data as Proposal[];
};

export const confirmProposal = async (
  proposalId: number,
  isAccept: boolean
) => {
  const response = await authApi().post(
    BASE_URL +
      ENDPOINT.PROPOSAL_CONFIRM +
      `?proposalId=${proposalId}&isAccept=${isAccept}`
  );
  return response.data.data as Proposal;
};

export const createProposal = async (
  data: ProposalCreateRequest,
  files: File[]
) => {
  const formData = new FormData();
  formData.append("request", new Blob([JSON.stringify(data)]));

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await authApi().post(
    BASE_URL + ENDPOINT.PROPOSAL,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data.data as Proposal;
};

export const deleteProposal = async (proposalId: number) => {
  const response = await authApi().delete(
    BASE_URL + ENDPOINT.PROPOSAL + `?proposalId=${proposalId}`
  );
  return response.data.data as Proposal;
};
