type ProfileProps = {
    gretting: string;
    name: string;
    avatar: string;
};

function Profile({gretting, name, avatar}: ProfileProps) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <p className="text-left text-sm font-light">{gretting}</p>
                <p className="text-left text-base font-bold md:text-xl">{name}</p>
            </div>
            <img src={avatar} alt="Profile User" className="w-20 h-20 rounded-full object-cover" />
        </div>
    );
}

export default Profile;