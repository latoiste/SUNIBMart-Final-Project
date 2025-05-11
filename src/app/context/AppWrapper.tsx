import ProductProvider from "./ProductProvider";
import UserProvider from "./UserProvider";

function AppWrapper({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <UserProvider>
            <ProductProvider>
                {children}
            </ProductProvider>
        </UserProvider>
    )
}
export default AppWrapper