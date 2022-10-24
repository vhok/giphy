import { ASYNC_STATUS } from "../../constants/LoadingStates";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
import { LoadingSpinner } from "../LoadingSpinner";
import { Avatar } from "../Avatar";
import './ImageList.scss'
export const ImageList = () => {
	const { appState, loadImageList } = useAppContext()
	const { imageList, appStatus } = appState
	const isAppLoading = appStatus === ASYNC_STATUS.PENDING

	useAsync({ asyncFunction: loadImageList })

	return <div className='image-list'>
		<LoadingSpinner isLoading={isAppLoading} >
			{imageList?.map((image) => <Avatar user={image.user}>
				<img src={image.images.original.url} alt={image.title} />
			</Avatar>)}
		</LoadingSpinner>
	</div>
}