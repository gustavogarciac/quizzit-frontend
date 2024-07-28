import { Post } from './_components/post'

const DashboardPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000))

  return (
    <div className="flex flex-col gap-8">
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default DashboardPage
