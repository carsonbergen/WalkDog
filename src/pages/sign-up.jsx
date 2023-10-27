export default function SignUp() {
    return (
        <>
            <div>
                <h1>
                    Walk. Dog.
                </h1>
                <body>
                    Welcome back! We're glad to see you.
                </body>
                <form>
                    <label>
                        Username:
                        <input type="text" name="username"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}