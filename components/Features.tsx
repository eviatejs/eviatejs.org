export default function Features() {
    return (
        <div className="flex flex-col p-12 pt-6">
         
<div className="p-4 text-gray-600">
	
  <div className="flex justify-center items-center flex-col">
    <div className="text-6xl underline text-white decoration-purple-500 font-bold pb-24">The Next-gen features</div>
	<ul className="grid place-content-center sm:grid-cols-2 gap-8">
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">01.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">No more req or res</div>
				<p className="max-w-xs py-2 text-sm text-white">Yes! this is the biggest one we're proud of. Finally, we've replaced req and res with context (ctx) to get data enough for you to get the request data. To make it simpler, the res.send or res.json or response returning is much more simpler. No more methods, return an object and we automagically convert it to the response you need.</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">02.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">First-class event handlers</div>
				<p className="max-w-xs py-2 text-sm text-white">Event handlers a must to have fine-grained control over your app, and we understand that from out experience. We're providing you to register event handlers to control all kind of stuff going all over the app, eg. when your app starts, shuts down, etc.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">03.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">Global error handler</div>
				<p className="max-w-xs py-2 text-sm text-white">It's super super tiring to add try-catch everywhere isn't it? We have converted raising errors to rather streaming them into a function where you can handle each of them peacefully.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">04.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">First-class type-safe state</div>
				<p className="max-w-xs py-2 text-sm text-white">It's super important to hold states such as your database connection, etc and it's even important for them to be type-safe. We've made it possible to hold states in a type-safe manner, and even access them from anywhere in your app.
				</p>
			</div>
		</li>
		<li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">05.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">Deployment</div>
				<p className="max-w-xs py-2 text-sm text-white">We realize remembering every type of route is actually hectic, like so much. So, we decided to simplify it. Here's how: <span className="text-purple-100 font-bold"><a href="">Click here</a></span>
				</p>
			</div>
		</li>
        <li className="flex">
			<div className="px-4 text-5xl font-extralight text-purple-300">06.</div>
			<div>
				<div className="text-2xl font-bold text-purple-400">Flexible middlewares</div>
				<p className="max-w-xs py-2 text-sm text-white"> Using the new context pattern, we've adapted them to follow it. With no more next function, just modify and return context or a response, easy as that. To make it even better, middlewares can be now, pre-request, or post-request and will be called based on that.
				</p>
			</div>
		</li>
	</ul>
    </div>
</div>
        </div>
    )
}