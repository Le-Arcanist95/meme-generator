export const Header = (props) => {
    return (
        <header
            style={{
                display: 'flex',
                marginBottom: '2em',
                padding: '1rem',
                justifyContent: 'space-between',
                outline: '1px solid black',
            }}
        >
            <h1>Meme Generator</h1>
            <button>Toggle Theme</button>
            <h2>Nix Arcane</h2>
        </header>
    );
};
