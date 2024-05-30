export type TProfile = {
  avatar: string
  bio: string
}

export type TUser = {
  username: string
  email: string
  password: string
  role: 'admin' | 'author' | 'reader'
  profile?: TProfile
}
