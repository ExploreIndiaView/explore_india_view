import { Verified } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { User } from "@/services/types"

export function UserAvatar({User}: {User:User} ) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="cursor-pointer">{User.fullname}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-56">
        <div className="flex flex-col justify-between items-center space-x-4">
          <Avatar>
            <AvatarImage src="/images/user-profile.png" />
            <AvatarFallback>{User.fullname[0] + User.fullname.split(" ")[1][0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{User.fullname}</h4>
            <p className="text-sm font-medium">
              {User.mobile}
            </p>
            <div className="flex flex-col items-center pt-2">
              <span className="text-sm text-muted-foreground font-medium flex items-center">
              <Verified className="mr-2 h-4 w-4 opacity-70 text-emerald-500" />{"  "}
                Verified: <Badge variant={User.isVerified ? "default" : "destructive"} className="bg-emerald-500 ml-1">{User.isVerified ? "Yes" : "No"}</Badge>
              </span>
              <span className="text-sm text-muted-foreground font-medium">
                Wallet Amount: ₹{User.CashbackAmount}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
