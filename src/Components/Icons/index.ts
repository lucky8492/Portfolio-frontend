export interface IconProps{
    size : "sm" | "md" | "lg";
    onClick? : () => void
}


export const IconBySize = {
      "sm" : "size-3 m-1",
      "lg" : "size-6 m-1",
      "md" : "size-4 m-1"
}