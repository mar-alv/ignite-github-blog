import { ChevronDownIcon } from '@components'
import { Context } from '@context'
import { Repo } from '@interfaces'
import {
	StyledModal,
	StyledRepo,
	StyledRepos,
	StyledSelectRepo,
	StyledSelectedRepo
} from './styles'
import { useContext, useEffect, useRef, useState } from 'react'

export function SelectRepo() {
	const { getRepos, repo, repos, selectRepo, user } = useContext(Context)

	useEffect(() => {
		getReposOnRender()
  }, [])

	async function getReposOnRender() {
		await getRepos(user!.nickname)
	}

	if (!repos)
		return <></>

	const [isModalOpen, setIsModalOpen] = useState(false)

	const modalRef = useRef<HTMLDialogElement>(null)
	const selectedRepoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
			const target = event.target as Node

			if (!modalRef.current || !selectedRepoRef.current)
				return

			if (!modalRef.current.contains(target) && !selectedRepoRef.current.contains(target))
				handleCloseModal()
    }

    if (isModalOpen)
      document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

	function handleOpenModal() {
		setIsModalOpen(true)
	}

	function handleCloseModal() {
		setIsModalOpen(false)
	}

	function handleSelectRepo(selectedRepo: Repo) {
		handleCloseModal()
		selectRepo(selectedRepo)
	}

  return (
		<StyledSelectRepo>
			<h3 className='title-s'>
				Repositório
			</h3>

			<StyledSelectedRepo onClick={handleOpenModal} ref={selectedRepoRef}>
				{repo?.name} <ChevronDownIcon />
			</StyledSelectedRepo>

			{isModalOpen && (
				<StyledModal ref={modalRef}>
					<StyledRepos>
						{repos.map(i => (
							<StyledRepo key={i.id}>
								<button
									onClick={() => {
										handleSelectRepo(i)
									}}
								>
									{i.name}
								</button>
							</StyledRepo>
						))}
					</StyledRepos>
				</StyledModal>
			)}
		</StyledSelectRepo>
  )
}
