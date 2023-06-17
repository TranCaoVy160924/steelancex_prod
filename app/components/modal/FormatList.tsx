'use client'

interface FormatListProps {
    filter?: React.ReactElement;
    body?: React.ReactElement;
}

const FormatList: React.FC<FormatListProps> = ({
    filter,
    body
}) => {
  return (
    <form className="grid grid-cols-12 space-x-3 px-4">
        <div className="col-span-2">
            {filter}
        </div>
        <div className="col-span-10">
            {body}
        </div>
    </form>
  )
}

export default FormatList