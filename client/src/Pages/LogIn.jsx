function SignIn() {
  return (
    <main className="h-screen flex flex-col justify-start items-center gap-20">
      <h1 className="text-6xl">Welcome Back Traveller</h1>
      <form action="" className="border flex flex-col h-96 w-96 ">
        <div className="gap-5 flex flex-col justify-center mb-5">
          <input
            type="text"
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
          <input
            type="text"
            className="border h-9 rounded-lg p-2 border-purple-700"
          />
        </div>
        <button className="border border-purple-700">Log In </button>
      </form>
    </main>
  );
}

export default SignIn;
