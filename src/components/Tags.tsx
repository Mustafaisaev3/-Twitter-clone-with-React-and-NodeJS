import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTagsItems, selectIsTagsLoading } from '../store/tags/selectors'
import { TagsState } from '../store/tags/contracts/state'
import { fetchTags } from '../store/tags/action'
import { Link } from 'react-router-dom'

// interface TagProps {
//     items: TagsState['items'],
// }

// const Tags = ({ items }: TagProps) => {
const Tags = () => {
  const dispatch = useDispatch()

  const tags = useSelector(selectTagsItems)
  const isTagsLoading = useSelector(selectIsTagsLoading)

  useEffect(() => {
    dispatch(fetchTags())
  }, [dispatch])
  return (
        <div className='w-full h-auto mt-5 bg-[#f6f6f6] rounded-lg overflow-hidden'>
            <div className='text-lg font-bold py-3 px-4 border-b-[1px] '>Актуальные темы</div>
            {tags.map(tag => (
                <Link to={`/home/search?q=${tag.name}`}>
                    <div className='text-md font-medium p-2 px-4 border-b-[1px] hover:bg-[#f5f8fa] cursor-pointer'>
                        #{tag.name}
                        <span className='block text-sm font-normal text-[#c3c3c3]'>Твитов: {tag.count}</span>
                    </div>
                </Link>
            ))}
        </div>
  )
}

export default Tags