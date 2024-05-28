import {Router} from "express";

/*Area de importação dos controllers*/ 
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailuserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryContoller";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { ListOpenOrderController } from "./controllers/order/ListOpenOrderController";
import { ListClosedOrderController } from "./controllers/order/ListClosedOrderController";
import { CloseOrderService } from "./services/order/CloseOrderService";
import { CloseOrderController } from "./controllers/order/CloseOrderController";
import { DetailsOrderController } from "./controllers/order/DetailsOrderController";

const router: Router = Router();
const upload = multer(uploadConfig.upload('./tmp'));

//****** Rotas para User ******//
router.post('/user', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.delete("/order/itemdelete", isAuthenticated, new RemoveItemController().handle);
router.get("/order/listopen", isAuthenticated, new ListOpenOrderController().handle);
router.get("/order/listclosed", isAuthenticated, new ListClosedOrderController().handle);
router.put("/order/close", isAuthenticated, new CloseOrderController().handle);
router.get("/order/details", isAuthenticated, new DetailsOrderController().handle);


export {router};