import { ASYNC_STATUS } from "../../constants/LoadingStates";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
import { LoadingSpinner } from "../LoadingSpinner";
import './ImageList.scss'
export const ImageList = () => {
	const { appState, loadImageList } = useAppContext()
	const { imageList, appStatus } = appState
	const isAppLoading = appStatus === ASYNC_STATUS.PENDING

	useAsync({ asyncFunction: loadImageList })

	return <div className='image-list'>
		<LoadingSpinner isLoading={isAppLoading} >
			{imageList?.map((image) => {
				return <div className='image-card' key={image.id}>
					{image.user ? <img className='avatar' src={image.user.avatar_url} alt={image.user.description} /> : null}
					<img src={image.images.original.url} alt={image.title} />
				</div>
			})}
		</LoadingSpinner>
	</div>
}