export { getCharacteristic, postCharacteristic, putCharacteristic, deleteCharacteristic } from "./Characteristic";
export { getAllInstrumentsPaginated, postInstrument, getInstrumentById, getRandomInstruments, putInstrument, getDisabledDates, postSelectedDates, searchInstruments  } from "./Instrument";
export { getAllCategories, postCategory, deleteCategory } from "./Category";
export { getAllUsers, putUser, updateUserRole, getUserByEmail } from "./User";
export { getBookings } from "./Booking";
export { getAllFavs, postFav, deleteFav } from "./Favourite";
export { resendEmail } from "./Email"
export { getReviewsByInstrument, postReview } from "./Review";