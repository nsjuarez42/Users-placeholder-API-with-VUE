import type { Address } from "../Address"
import type { Company } from "../Company"
import type { UserInfo } from "./Info"

export type User= {
    id:number,
    info:UserInfo,
    address: Address,
    company: Company
}