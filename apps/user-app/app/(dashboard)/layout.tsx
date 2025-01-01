import { ReactNode } from "react";
import Sidebaritem, {HomeIcon,TransactionsIcon,TransferIcon, P2PTransferIcon} from '../../components/Sidebaritem';

export default function Layout({children}: {children: ReactNode}) {

    return <div className="flex">
        <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
            <div>
                <Sidebaritem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
                <Sidebaritem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
                <Sidebaritem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
                <Sidebaritem href={"/p2p"} icon={<P2PTransferIcon />} title="P2P Transfer" />
            </div>
        </div>
        {children}
    </div>
}