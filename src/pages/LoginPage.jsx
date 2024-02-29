export default function LoginPage() {
  return (
    <div class="max-w-[1368px] flex-1">
        <div class="container grid items-center gap-8 lg:grid-cols-2">
          <!-- illustration and title -->
          <div>
            <img
              class="mb-12 max-w-full max-lg:hidden"
              src="./assets/images/auth_illustration.png"
              alt="auth_illustration"
            />
            <div>
              <h1 class="mb-3 text-4xl font-bold lg:text-[40px]">Facehook</h1>
              <p class="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          <!-- illustration and title ends -->
          <!-- login form -->
          <div class="card">
            <form class="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
              <!-- email -->
              <div class="form-control">
                <label class="auth-label" for="email">Email</label>
                <input
                  class="auth-input"
                  name="email"
                  type="email"
                  id="email"
                />
              </div>
              <!-- password -->
              <div class="form-control">
                <label class="auth-label" for="email">Password</label>
                <input
                  class="auth-input"
                  name="password"
                  type="password"
                  id="password"
                />
              </div>
              <!-- Submit -->
              <button
                class="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
              >
                Login
              </button>
            </form>
            <div class="py-4 lg:py-6">
              <p class="text-center text-xs text-gray-600/95 lg:text-sm">
                Don’t have account?
                <a
                  class="text-white transition-all hover:text-lwsGreen hover:underline"
                  href="/registration.html"
                  >Create New</a
                >
              </p>
            </div>
          </div>
          <!-- login form ends -->
        </div>
      </div>
  )
}
