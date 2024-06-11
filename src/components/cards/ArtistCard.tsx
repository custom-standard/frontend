import React from "react";
import { User, UserArtist } from "../../types/User";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Profile from "../user/Profile";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface Props {
  user: UserArtist;
}

export default function ArtistCard({ user }: Props) {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`${user.uuid}/works`);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <Profile size="lg" user={user} />
      </CardHeader>
      <CardContent>{user.description}</CardContent>
      <CardFooter>
        <Button
          onClick={onClickButton}
          style={{ backgroundColor: "#EDC0A7" }}
          className="text-white text-md rounded-xl ml-auto"
        >
          작품 보러가기
        </Button>
      </CardFooter>
    </Card>
  );
  return <div>ArtistCard</div>;
}
