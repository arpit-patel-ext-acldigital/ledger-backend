import { AppModule } from "./app.module";
import { AuthController } from "./auth/auth.controller";
import { AuthModule } from "./auth/auth.module";

const router = [
    {
        path: '',
        module: AppModule
    },
    {
        path: 'auth',
        module: AuthModule
    }
]

export default router;