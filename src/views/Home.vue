<template>
	<!-- <div class="mx-auto max-w-3xl text-center">
		  <h1 class="mt-20 text-3xl font-light leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-4xl ">
			 <br class="sm:hidden" />  
			<span class="relative inline-flex justify-center whitespace-nowrap font-bold"></span >
		  </h1>
		  </div>
	<div v-if="getProduk == undefined">Loading....</div>
	<div v-else>
	  <div class="grid md:grid-cols-3 gap-8 pl-5">
		<div v-for="product in getProduk.slice(1,10)" :key="product.slug">
		  <div
			class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl mt-8">
			<a >
			  <img
				class="object-cover"
				src="https://images.bisnis.com/posts/2023/03/12/1636532/3._kucing_anggora__ciri,_jenis,_cara_merawat,_dan_harganya_-_daily_paws.jpg" width="510"
				alt="product image"
			  />
			</a>
			<span
			  class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white"
			  >Sale</span
			>
			<div class="mt-4 px-5 pb-5">
			  <a >
				<h5 class="text-xl font-semibold tracking-tight text-slate-900">
				  {{ product.name }}
				</h5>
			  </a>
			  <div class="mt-2.5 mb-5 flex items-center">
				<span
				  class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold"
				  >5.0</span
				>
				<svg
				  aria-hidden="true"
				  class="h-5 w-5 text-yellow-300"
				  fill="currentColor"
				  viewBox="0 0 20 20"
				  xmlns="http://www.w3.org/2000/svg"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  ></path>
				</svg>
				<svg
				  aria-hidden="true"
				  class="h-5 w-5 text-yellow-300"
				  fill="currentColor"
				  viewBox="0 0 20 20"
				  xmlns="http://www.w3.org/2000/svg"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  ></path>
				</svg>
				<svg
				  aria-hidden="true"
				  class="h-5 w-5 text-yellow-300"
				  fill="currentColor"
				  viewBox="0 0 20 20"
				  xmlns="http://www.w3.org/2000/svg"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  ></path>
				</svg>
				<svg
				  aria-hidden="true"
				  class="h-5 w-5 text-yellow-300"
				  fill="currentColor"
				  viewBox="0 0 20 20"
				  xmlns="http://www.w3.org/2000/svg"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  ></path>
				</svg>
				<svg
				  aria-hidden="true"
				  class="h-5 w-5 text-yellow-300"
				  fill="currentColor"
				  viewBox="0 0 20 20"
				  xmlns="http://www.w3.org/2000/svg"
				>
				  <path
					d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
				  ></path>
				</svg>
			  </div>
			  <div class="flex items-center justify-between">
				<p>
				  <span class="text-3xl font-bold text-slate-900"
					>Rp.{{ product.base_price }}</span
				  >
				</p>
			  </div>
			  <div>
				<router-link
				  :to="{ name: 'SingleProduk', params: { slug: product.slug } }"
				  class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5"
				>
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				  >
					<path
					  stroke-linecap="round"
					  stroke-linejoin="round"
					  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				  </svg>
				  Details
				</router-link>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div> -->


                                <!-- Pertama -->
	<div class="" style="margin-top: 10%;"></div>
	<div class="mx-auto my-10 grid max-w-screen-xl gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
		<div class="group cursor mx-10 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAADXCAMAAADMbFYxAAAByFBMVEX///9/ya16qFxPf0JikYsZcXCr1JK/PlnY7uerS1ffgIGCzrGW1NCBzbBklI57N1DO3uZgjYlRg0OoxL14xqlOfkHf9u9NMzd9rV6v2pXFP1tkl4JLdz+Fy7F6waYSXV5wr5fy8fJEaTnJ3teq2shik392Nk/k4uQrNCZyoFcuOyjS6+MUa2t3uZ9pnJJVe2oQUFJKaVtDXlNpZ2dspY5YhXNzr55BWFU0QD/Avb7Pzc9/oGq2s7eQu3UzRixCcTQ8WTNVWlie1cB3dHU8UEehm52LNUKqWGBPcG1Yf3s5S0lbYFZnglSKrXNTaESGgoaWkpcaLw+NuHJ3kGdikE+Bj4ozXCWUo56+49altrEQRUhAYDZia2gAAAAfLi8XKCwQNjqkKkWFGjM2FB5WU1RcHyt/Lzx1Oz+aUVUtMzM+ZF95urckQD1DUzYvSRg6PTQOABIrQBlSYUYwJTAVMQBIUT5eb1JqflycwIY6RTVwe3iGppq83ajB3LCmxJM2XE1ICyeTRFy8TmZJKS8rABRqEitOKzZOBhpbUlRANjYiFBRWAhtXOD6hx7lRIiykTGMrERodKBVnIy9GDBa5a25nNztNQj8TAAD1s2pbAAAgAElEQVR4nN2d+0MTV77ACcFC7+mMJkBEAiERY+QRQl5miKltTOImUxV6SxoDbAQNdaGgt3Vtldt76S7rvdrttV3btf/uPY95nDNz5hXostvvL8aQTM5nvs/znL6+f1VJVPaz+EXslBvy60vpUf/YTAW+yD6a/Y3T1j4d6+8fe9QXezwz1o/1G0v8RpExav/YxFIX/fMo1pfIPvrg0cppN+vXEILa37/6HzOIdbRY/KJ/rH/s08RpN+zkZeUDggphsXr9lXX8xmrttFt24pIdVVGJjN3ZJ2/M/NaMOIGiESMzs8obvzXW2iMDaX//FfXFaum0W3eSUuyuGlHHZmfUV6PFvlLxtJt4QpLI3hozoV5f1V6uL38R/GD5tFvJkViiuLRUgrJUdFcFFCt33jfZ79i+f4x5/U+WeGJLtcpHX965de3abSTXPrl1586XH32UrSyv1CzIE6Xlp7fe+XcjKcS7ReH/kyWe2NLyR3euPXvnApJ3iFxQ5J13nj1D5LfufPklJIfoUJaXKxsf3bl1+50L75tI+/ufm9y3f6ZU+rh82pgQtFS+c+0djZEvOjlEf/ZMeYejU1j7XzGj9q8++TT4x9MmXcreue3AaSUcUFQNz/Le3Z8IBmdPl7T2FGq0B8z33+eCQqVev2NWKjTh60F/MHuapCv7LlT6vir/joWLqJL2rz99xkMduz7h939wiuFp6fltLuj79kCWoGMz609vX3jG+5t/Fqr10emlnewtM6mFZTpjjvWvrl//6hm8Iu/vqx9e9PuDz0+LNPH8mRGVlz2cIcf6Z/wX959+9ckz7A68i8wErwShCZ9WF2Bpv1dSjNc/MzOzujpxcX1//+mXX3+CEzO5DO8r/osfQtZHp1QTl+5c6IEUUs5MYLyvvvr6608+uXb7mZJmNeH5wKofRabgF6eDumREdQOKPPLp12pxxSLa3bKZUWzCp+SuiQ8vOLbQoNCZi9e/RB7pkKJ4X16FJuyHrKdSIcaesw12ir0wlzz/6rZTEWmFCtWKTPiUWLue7HdsFeUSV7UV9/urxIT9weopoK6wFYQT6ewnbotI7gVmRv0T+5i1R39NSBuVWo9VSOKOe9Sx/v2v3ZJaOP3qqB8VEr3H4W4oNDTcLC/3krFYC7Yvb1fNBYeVWF1o1B+c9WPW3krE7PQQlFBoulVe8TpbUrp2wUULCer6V667QFbXgCaMamEkny71gLrUCg0RgbgHWW/KfUo33zbZjF2/5hbV+jrQhHHG8fdYI3ZVVIw71Op6uGG1265RZ/m9ILPYGQc04f0JwtpL0lmeVjnn5u5i+U/Z9Wgzo1Z7VHeual+HzGjuClk/9owa2yBqvXvDN6KIAMKSO92WrnlEtS2UnHuAq4g1qMB+6jmUKmqdG/FRIoC47Ia2TLXcTiNj+8iAL1x4du0Op5frClNlHb2usnp32DJR6w2GFdIK+a7jfSvSDbdDvfgJVOjtO+Xl9lCbysfffPPNs2deRi0g4YTGGnzsEbU2zFGrSpt1SGEVlxFl9SsE2pqGafzSVRmG42+++a//+u//5g6v2ArMOKRq6inDKmq9ZGb1+cBIumKXb2P7VF/MuoFj/VduEdChS76R5MDjZ89ue6bEgrLrxIcqq9fBtaKSWzmk2G0jh7VEolgsoimZWg0Nz1cqWSgbUA4ODjY+wrMYsA/6vmm6SSWFJfDBMAIdujuJ7uhA3W/xUXesml69GnFljgRhjgkD4IvmDz86aDZbrXa7PTw8DWWOlByUDE1Pt5u71esfTqz2m3nHxiYet4bw/ZwjIUFYGJjtlXV1lPZXr0asJJxJo/UCXzhd2GgNK1xDFjJ399KNSejZAAiRXD7zfP8iAzzWf7HbDrFeIlwV5RkbHidWv5ZzoBF7mZlUykMmMsGWR1OZdDhyyZoRY96YRMmY/h7w5VKZ5+sK79jYxe6wcom5SfWDwtWBxnqPikWsQYo1+EcP5btiwkxkiobz4QhUlG9kcs4W08LFQTKOeMfGRh+31ZtF+0gyID7ukTWIWf3+nhRbNptwBCpIUF6P3DVzXkL1FT+UUQpOxveuaF0KNnlHAmKhRyPGrKT76lmxRY4JM8LCzt115FQF5DeGVFTdfhXWgcbF3lgxn9rP8ajYFVIfXrJu88gl75xQhKpmvuYYHxgQn/dmxISPclgPis3aJVcFdvKuR04ooDrNt1+VVTqGXoOzoz0oNnbgYMKElheGBJxnBM7H8VfuWtivylpfdQaz1OvFdb93xRaJoXHrQ0uBjCASDcfzqVQ+57OgnbSyX8Laa9ZR+K4EvStWcVcYhSeNxQQfEwXYcKq6t7m2ODU1Pz+12MkB7ieVmGa2X3QVyNqjwxLjJWPhHhWbVU148oYLUMiZz3Q2F+fPULKZsoC9cekSlxReaACyyr2gKqz+iVnviiUF4t2RG1xTY0FhzdhZmzpjkrW8hRlbBjPM2pvDKqwGxX7sQrGJJma9ccM2EGPSXKbD6lOXjsOXuaw9OqwagL0rdqlNsmvI3oKBLy+tWYAiK056ZRUHenTYGZWVqZ1cKZaEpu60rQULQr7DMV1Kr1aJx561lww7oydWr6G4AklD5WlbCwZhe9Iz93K9sRZ6cFiKdX3dm2JhGA5tDNtZsBCprtmSLkpRfhy2Y11ArL2UxKs6a/AKxepiRHEjFGq2QzYWDHL3rP0Uyvxm3jOpwjoQ2PfusBSrf53uATgrdiPUhkWidaNAatNeqXKyB1TUWUeK7aEPS7N6U2zsYA52X60LRJBetFXqvTzw6qoKawBXE977sEG66PfksbFmec6m7gcpW9S1aqQXpSKJBHqsJmhUYyi2V2zs97D0tw5MYM9OqZ1wr6Q+XPzDauKiVyOeYViNOdaWNQFLRLvAJNsoNWPVwXEjJDgNeA5OLKt/dNa9YrtD5rFSukVxKxuesurduGUlDiutevTYVZbVQ1VcatsFJiggw4fdTB9HqVhIcBod9XvCDbKsZFWiK8WiIUT7FoH8PXPN1Ev1YBSsWLEO/W101AOtAdUfZKKTjceiaVenAQkQSW+yxcRUJ95bojHALqDKCVcDkNYl6oyJlYlO1jNZeDbduVEgkqFopzop37GVSgSFJ2Vixi3sqpGVntpB6FZbHSou1Epok2pJvHhypBhWVE1w1O+K1eiuxtrJ/yl/lQceQXTZKhCtrs1PbcrxEySFIoqS2shRv4v5WJMJQ2GNONi1VKtFbhUE01AoyKXiyZPwUxa2MOEF1mzCJiPmTlFib4W5ldN8EI7H41Ej/4mDIqnrWnEBy0E1RGJ+nx2NSMyNCBlzlwyk16amFjNerVXwNMSsfCdK5UdHWJ5aYSSeYP7Li04ot8LIBMIZg75AFWXUeYuBUGvSFNchnMyBtkAHWJ63+o3lBG/FU6lNykMQqVYZKpDCxcOU1TioBapPmubEdAEk08Z7yQjYmXANyyX1s/NY8BoVrlphZw7ku+dKaRo2co/k0bgXVoQa4pAkM2n7bh+oVtdp2FHrEsqcb1SrDbL/NaLiceFLI+Cwdu7cuSf02JjQIZnU23gZRDWZMCy5vr28Yz9uAdK+1Bd0Wy1hrVAN9T9nzw5elTcJDosQtXt5h2qPYsNrSS+s0rQ5VYP8g7NQvrXt5Qr5KMhdoRtrUUJZohozrLkDgBcOCKmlvr5zB9tnt8MUWBKPMG16IMVTrQa1gqR0+exZR1ghFxeESPUibcdBXliyRmXnJ83rbJfQTOTdHMpFxW9hexjFVlH1u8drIAyqnLdBqm2qwED8wVlVvrVzhySK94CxY1NXYMZGqX5mFRtmNWx1ruCJDQm9PP8n1Jyo3hwhh4rfqhlKAOHqZtXc7igqNlm1Cplvz+ryIGLN6sN5HNoxjUN382ZW/XZK9RsrJ1PWQTVTqIHeK239Gdla2qDYKXN6BWFpkTd1A2TjGgQhsnNZA7189s+Dj62tGJCbKkSkCSZEjY4GV6GgF7agHFa2Y4eT6zROREfj40ixD+hInLw3f8+oChCV8BCFiVXIt0NsfwlEf6RJxwcHt6wLE6AakJBZZ5s8OuqCk8caZDJsFs3ibKDBmdL9wfEfLht8Skimo8ZiSh0TN8csvFWA/mj4Lyzp4OD4C2N1rX86o//EF0ELGo+szA4lZMLTuEh+C9uCjZi980Y1RCR1JMbox1Ct7HILWJ28VlH/NL61RWAlK8WClGYoIPc3V3o0sX5oYKWDE5p0JWpN3EdNQe2ybAxG7agDEyY/BjKrVpBaaanO+ufxv7YOtjDr/bBFLBbiOf27ySsTPaiWWdiFhO7XZTVvPcAN+Z/y5bMPbFCBpI3BrBncVci1GG8F+eVzG4pSISHM391B/BvnrVjD1F0QfEymdSmGWoINxNCEQ03M/r/jyJmKfQ9g1rFmFfT5K6P6QZVZHAXClXPnXmHUH+ClUVYvYtMZ3IpbGE6U6WSAtGenNdaIMBDrAzF4BSIuLpbuo2YcwHx79rKVkTGsi8ZPRbK0WoVoF9acqIq4jILSfXx/XxOPPbK4fjLNRor4LJfIhnXWeHeoKnF5bmiojdErWK1Qw7XLl236cNq0zrxsClrTzJo3CaKeQ2UExtsmHoNZB7esbqYh2oHoFaOeHMTEGtTHJmAtHCI1Izbhl32I9axN31yd1pmSzH+DatXmvkAVoba/JaiD4+T8kuYW+d8r/g8AU2SPSJ6c1tBX99MJFnXnSGQqIhPeahHWtA1rBsWmed6arRFKrSCPOojnWtsElVy5r6+tsN7nl8UmVvR7puZbi9ld/cGPVNba9FCohT2ptaWYMGK1GV9CU1hTm9xe98hdbe5LSGYR6rnmZYKquKsSFKDwfwFw3gZ59xHKMLbGsmY1E36JTPg1erVy1o7V5+t0Uo7TysSCz507UNDGX5BZs+J99f/cLgBIM+oW8IAtdFq3ZYXZhP3Bp1TGITUTcVfsVBUHVrSpw0GEeI2wbowrbD/1MayDW9zwJ6T0lwBEktFcOJ7Px/PfuSsrOCasF4mwaFJMOPFiXHWql06sLqRLUNW4Ozj+vYF1nNvdEeL6q8ze5tra4uIUlk1XEcpYDDOslTlYH+qORJzqwVm72ORGQHoJow5hz6DCMMX6gjeuI+QU045IhrneTRcRKjjLSVAaKyqaSCtwaLqPQlPs22OzRrKKWvu+V1krBla+EQtRwkqCPTvPy9GZQS7ucz6i+iuq+6dJZ/ZACyBoHMbj2LdBwKGK2retsh6QXyxtqazjnMEOeJcUVs46lClTmWCQ0Su8d1VWWPcr7oodi9Q2MOXY1U0uRFEruthfDawtnXXb5jdAmrM+bso+HAf5JZaSc9BEZOggpqccHECyZ23rYWcBqRJCjTGsig1XxjXW+zYdDF+Ut+xxvmNTMAZnjT0c5X3yy2jGSsmu2LEI6wOHwT5nVllTq86a1X9GdVi7yQQgcVjPnOlY5h6Iyv/TKEmpaFxYCU24A4JZkbt+63W5MyPRFQ1VZ31J/r+tsw7aBUAhzF9z07HKPVes/kD6dHhQbW7ZwFpBo6bHQQXpomrBpELBrP+jhGGdddzUT2KussNlPbO5zou1E9ZjGKSvjsbBQv9Xo1hhbIr99YezZy16IS5ZyxBVHfh4rbL+1RCaUCfWdr7DauXYGqcMXLeOWmQHC1br3VyJ8leYX5tbP9iW/s6SXNYsuE+rJZQy5S1lwuPb9oUo32PNsMHRWZs6g2zr7pIB+swKFTQO2i/Gf4Ap5xisQrykWTAVd7eaBhOG2dzhOlZLAtmqIvih7RgcHpZAZyug3iaIVpcTqgK27o9D1mOFYVxIqKi60eIuVHdwkGa1X2dgqVgaFpovz4F1QZOSMRiE55SLJlPlWnd8XLnnPzDj/t5ZCxQqVRMOdhMbW15YhbDl1oJFpYSCpMYhUp4JozlXbVEpANF8dfv+1iAEHv/zMXs5WZpVSzpQXjCoTv5qp9gzO7MQw/+hE6kynQOrfnp7G+wRC9F4Wn794sWbn45VScDQRKFqnToEN8iy2sZhnzpHyJW96JWJ61bVA61WHIU3OPs10O5OIZL0NIlubiB7ktcSq0yddPw+t/inhUz+co04HHnipvtOFjhlQ5bLoo9V9wt5wyLAn8Z5pIP3JRfrq6NW+0bm0yDiYmBG2R5a+78eVlu5EJAyrItrmhQ7Pr61nY66WfnG7e4QI4YG6AyrrFtLkC6q0w+OuNrzSzfvsK/PWrEo2N/fzoRHXEa/SMeCdTPic4bVlsF3ESY1CciXu3Y7AHgixMu1IuOxJVhAjGOB6fvF21RuxP1iRmUdDsdhYfx0hNXW1BZhcQSqDh3VOa+b11FEh/E8Uyhns5Xl5ZVarbT05D6UF9vnq+l8dAR4XLVpoVi8kk5IckciVBnVl9RmR4S41XwZEbzJ3HGLM4cWxXNB8I1E0KgnlGg0OYLf9HopH8jzK8V53CGEsDaVMLWRI3YI4g4biC45H8DgJAJegNx7bLfq25F6R4j+zbLzzqwKr4VBxn4L3OTxWY8rVgWFkpxBzmrE7QN22WU3AsJS2GahKzJi7zZ8smKx3UtdXgbi/Nme0bdsNojJQADxajpsPWtx6dKvsQDck/ALCm0pHcjzeq/BK8ZdV8VDgI5Qy/9SzUcF/gknQv5YJeMJCMjw8o5eYIK0uS4Ofmxe6V/Kk0Vxfzl68CQTT/IiZVLr9QiC3fI6T+Lt9mXMpx7MUwNzoGocSg1+zDvJcTlMYH88f/7o6MdyKmnSLlCnzoS8fKwOEHXJSMrThUAugw5hmdeJFyXmtj82bCL8I//QygpelAaiEPb8j4nEipwybkZRbmBECp/M5g3gS1e9+gVAB6Gl05lMtSrv7e1l4qxlJA0b6azO53ypwH4HNYvCdOKtFPdxqU6CFIBoWnJV95t+HVBi+L6Qo4KxNSrMPPgmC0kI+wsMXrHvzh/9mM45zye7ayGpJbAANPzx6s3Oidw0VkBKG3Ua/ZvdGYkKbGTn6KjW11c+gtZ89GAnH/F691UgVWCNmExGcZEYhhJPZY7evPvu418BlYpPHzy235TfVRaSVo++61tBjovk6MeMC1tT6YSRCIRCE/4p6FZV+e35o9c/vVxBtX9paeXNTSTvQrlZ/VVQYTghZ/x/yt9CR0mWjBGA9F+ePDivydEvHZvtgfg4rmQuDOEy8qvX228++0wFUuWlenntnc8OT3S7Id0c5LLBRy5O+KmQTgDI/0UjffXk7zffvXnEW/KCTlZDx3Gdx3zvWsobEiQSb9Q3to8zyO4gIHUx+EdXR32vkFaA3HdHhPRIZdhmTRktT8ml5NdvbBg1IXOAXfW/R8ff7W0jwvPHLk9uLR2qS+0R7JPPaPXAzIpxCeerN59xsLjyv+jHl5SP36yO/KrVphB1fYR2cY9EDZB68OTI0ObPzueTsNsdTj3eds2JBbpP7AF5+WvaLxFw6PpE3phyoAC0Y3Ojb7558+YzN2bLyk99fW/J91/1dCyONxnx8Hy6SlwZWzx848DgVm42s/gGvUlbHhN5ggJSHg69rx2SFoHcee865Ao2+ZuvejxXJBLxdocEx+xKSUIipiYIqW1Dq3+niHfeNz2fKxKpe/umkPf0+JGKEkJAVMY6+d3PUP7NJD8TccHes1KhJOsNb5oFXhQLk09VuTwIH/3BDMkXhG2lVFtPtSURrg7IA1d55wVYfiPv7TEVsa4ykir4Un93C0uITVq++di+fAA5yWasQ1gQ5UBgwahawZexnK3w5LFIsoeqaiPph55oES+F+tp+SBY22n7hY0BsFMQBREtdBkQl666+aerMSSrTXfVEGxA59Eqr4b6x356OHt5ir/UkOoQZHZ4YEK9GtF5w3nbaP2LejW+v11CoVVVzP6T9Oyc4OeBC0ozD5vRk1aGSQufridIAkcDAwsJVJAX7b4FDbw+tQpsAhjZSauAAI6nvf+cR9mHVwVF9adlp0wA6D1MsNAZoESWnc91yrh9rpLIODc3lJO1oJiCEJdcxGZEeOpHmdxqOqTOCD7CqiwyqYwID3p4ERY5cRo8H0q4sgGjapXJ/933KwXp9eakuOiZOcgobCk4etOo5OlXIedeoeqJMEQi5w787affnh9Ww7VFHAvClIGnD+XQO5XQ9WWcVZQoVHQ3AvUbU04NllufUE9JhwyhaePFc6u1Dy0j180PZYUQOHZMiNUQxwNmgZpTJAFGlxipSYUkQwtU9/vF9gicjJucQk8lImGKrOb39qLseTr99+Acj8M9/+P4w7jD0CN2+KkPSAXHnriMqMWGKVazr8xqwBkFz0Ju8iQhvkbimHQePvwt1GzYMw4xE46nM2+8fPvwDkoffV9PhpP0hPugkdWi8A/is4b1hmydDqF9YGGBYxQY9XaXM3fHOdRbCXjoApTZ7Fj8MJnLe4IV4qHQkkoxCidg9xoBcASTzUgGpFCuoab24ShN8yCmt1x31FwR9wzz3AKKIl4fomJ8DJYBclbskyUUvBN6IaEqSFVBUFnRDzpP15KBeFI+Uf3fUwhnk7unzdbyd9Z6yjnIePLMERgCRVBVGHo+HVmH31jRKWt2ZdrG4RlBNVyZuq80Rgjw997zJKY3NS6xsRHksh/F0UxCpy3LKalKag4k4ZbkeEJlyYLdldxquKsmAGnzJgb1qJwGkmfUTvJOlvHXslIdeGddKwD4W7HhImXzOZ7eAR3valYQ5aVBkwc5nifq0yKSyBtR9EKDKrgGa52wGETyViVn1qSiG+4+rNhHWMrKcSYWjEZ86RahPWvkiaKa0CjEbAyZOHIOtTyekZDJAs0JnVe5s1biegLdYNenlWYtZ7cFHRsUqDUDA9YIsydVMOp1K5aGkyKSVLBfqDaRNM6Yag43PIuIcjaQkV4VVLCjOCkyoZ/Y45jXipV+3oj0V9YbaHNIe1YsUYEQUCDQUCQTU92xEChniAExoe/9hOlxHL5ZkmFkLyhgYZxHbJmdcQ/AwTtxXGmYUix7VoPhFwI7DWUR52GAtIN6ZMqdJTa0ov4o7Ivkzb9Up73g0b0lHf+IYOkkwvDN1ZhEHQi1k9CgBHPX0jCP4SKwxeB31M5C1UB8gCLxFp7xj70DGA6sWiGEYUR/VQM5qunosxeLARJtwVDlHx2CJk/qviNKAJAbwn7l7HXhJxxtrWWMNxZVHNczjez95LNYGKVL0E2PUhZXscSu09QQKsJgIXMXv8xaw8apEb6wV7QGD2V0tCqD9qgLdc/asVsmQtbXdkGyapNVaL6DOOh4kFnhriXnHj3pjVYJTaFr6/HN1BdU8Gr+jbnlDCnijFRW1UklbM0t6z6RaCuPvFHZw3YTXJfFW//OKCW+spCIOTcvvvfee9gPIqQQqQgakgidaRa100SSoCys3aUukv7ODxyWIw/LiMJe14IWVnK2HUXVW7BpMhm1IcsA+ndKiqBWZsLZIHKRJbKVObhOY+PcLHkcMXCW7E8yBmGvDHofX0GldEkJ9T78uWscaYYKT2JClhktaUdKeQQq77dUOCUcCOearQ7WYDgn1HfK/BaJ3s2LJOWhsfPJUS5AzcbrvGVhRB8oYiMVAYWfXlXIDSu9pEkSrm1OqiwqRHQg7RVkirVZR2iVXDhCFmRWLI7gQj9JDCSNeOuu4u95aIKyifg+hEQsmKlGsS1LdkVaUlee2q6fma+Mnmc3NjN5Q5gcCvyjgxIh9EVPa6aAgEl9bu6fnHiHp7RHV0GFlgvreguawKA7wKifIucv2x3lCcnaopT5aSasfYN+IUgoTEHZ3tJE1xr1ZE0ZpmjqWEjQ8zTjDDNsWTazI7CyqRBHaMsa14hV32zjclbXynVe1G6pQcUcbCQ8QFqNi0RgM2gE9r09oCVcLHufqlr5TUN/7XGfds2TFuI1CR64P8HFxwgm1Zd39+Qf9MmqtS/oMx4KiWCbH3kN3AB2ooj8AEGbnPW+ofbF7HNaqHSuKyrVYKbu3ax6MgAkHRaaNAHW1Dm/oilWrRM1cBZR7wYw24XmA6L2pe1qNKSQDouyRta9sZkUxjy5qTKx7eBS6uLxTqBsGJcTCdGhY+pz2CO6hxqxa6zJ1iasmj11T5gFyYa1jJ6Cc6HEKFmadz02sKEvYsQ6oea0GWykV6g295y5KoeYum8F4U8YGb6UmOKAon9Fy7KKaqKixvggyIY9hGBrxrpG1k/TZsop6TNiDjIF6QULDTnhAptEsL7DZmnOosTEI11lWRbHxNQMqdasi+Hve1ocgefk5y7qGV7XZ6VVfl7GM/EzEwLsyJC5IagZjHMJWrQEIKjPJlnxI2dm9ZoGqepInKd1jWJXbaBOHqfsZ29PyIhmUkkwOwXucKKNWuWFgVQtFHywr5++Zt3gK5Oui16UwqL07dap5U4p72bBK1JcrhrK5obAGNBvmhGGmc4wnmVnWgBqCqh3OshO1zxDwViEq7W2KGqv29BFLVnGXrlYSe2wU/txowvOc0ESrdQBXTLIhdykfBJypFhWVbYdbKbYPFpS6SY8DwLIwkpgvLzeYv5lqMM7YCaNWZMFm1gWzj6uyoE6K9OCufeh0nANoewtMyLMacDLdzh26mYX3jH0m81gn3W+FfUXyAFzjBAlvxR76bkQfUO7BXfvQ8Tihdrmwt3mPSg+WrJLhy0v6og6xLvLKTaPQXOROmVgtYOnb5D27EkEH9obYxyUl+awcL6k0tFisuquuVrO7MmqVAmQGwcSqxydaqQvUV6seC39V8FyHZYsY4ViOpP2+ZOoxcbIrfeNeynu7u7v1hmT+NZNm2SaZ7MutoIOPhpjpK6suXYFTqyQ66nzxL4YgzOnQ0TVKA9WaieJSqVSpm0MhC8sodaB3E8aKZafqrMIwNyAUlcQTyOJMPaCjmqcS6XEsXTWxPc7vBRZ0UuNEhLjXown3YY9lWPmhyeoXani0SKy3N9jAZDZhegaHvliZe2dF4rSQdMA4/NVbFCatHWaf5sR314DVwN13dbx+cttf3i4AAAO1SURBVHq6QAcmzlodPeSJu/Ss+NIu15ACV1Hn5qpobI1Y97bykpUuw8qv/C3T91LzAGYeURoKNT8XKbWuGSec9DJCbLC9T3MkVuTqglGnuCXHQO1bajETw7xfFutW8aA7PNyURVGGqaurdbHnFzvG7hwVSgMGIyxxopO19FQLa5L4Pc3Kd1erML/UHB4ebkkiPsYuL2+uLS6ubcrpnHnRgH7fOkYTsVQs764fIzL1ofXwMGSqa164Jmz9A912q7lRzkoboaFJtEAqmstFfZwFNPplxT1T7iryQrGVHCMy4aVO7RRIKWtZJzk/KxaswkFsuVZaSuBrKMfYmZ/CiUXLN+IuxxuWG25hexmRoKQ2PBTaSLXaZGsJp0AUdx0X2MSa9mt89LVMda67vXU7v32chNNHDgIdehIKDUlaowyr0JyjQaLpsONI7Y01+G2NddwptreeK9XMoenhJhqxnz4EJDKJEjXHLBZcLJtKOJzIrV4sYBXjEu5ctudSmEixAn1uB887N6MAhRBRbg2rFbkY6Li5kwnbXSZ6xbRj2cmG8alBTWtbzCwcT63kh1p4Imajm0LjvbsHw8Nt0pEeKGRdDQEkDu32OmiLLDs2+aK2c7ChdpvERmGXq9fjeSsW9LyDoYNKrC+xIu02yjBlDpfR5E216zLqVVrLVetdG2pfyJxtdEmgX23vKOort1s7WuTW3ekE1IqWEzS7yj1PfIdQhzf29rorbtN2sRkKzUkWrNoKRzvUPgn/KjYnsb6BXioVhri7q2QkseFtMt3ihzayWjtq8ka5XFkpFT2MX+Hn37X0ySWm96lYsLhnp5SV1jC5xWgHiIxfNknpuNNqbeA7IO56nsRxkmLC8yBdAi8dmFZKYAFE43Q3XdWqXfckViaozXJ2r0FUPDyMFCtKbVKEBnalEzDg4wsexwlNH+LiEITlZrurjPgLACy4QO2rIaJmIYtwlg8IKuw/iWK9SdTdqRyrXjo5KcNCZLiZXapUU7lotRUKhabJCCxIpqsN0dGAYWyDNfWy8pEs0XB3JStL8g563ZJ7HnU5aSnubGQrNRzHYkuvhnCqxgMwIF9uD5fRIouOg1ZiehSMocDUlIgZJA4QqZc14P9IIRv1QmV04GfqgLhdQ/IQAhLyQTmrWkHpYKP7T6NTk5ANXdPd5Wy5uoGtUd7zppciZQPF2rF6q7+yoGWOoWlS3+Dg2q70NPnyLyHdoaGWkvNX/hOyvrX/+L+0JCS9LpFgOP3tapWV4tt/UP7/f2x1/GqmpBsZAAAAAElFTkSuQmCC"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Bulbasaur</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Grass
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Kedua -->
		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Ivysaur</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Grass
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Ketiga -->
		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUTFBcUFRMYGBcZGRoZGBoaGxsZIxoaFxocGRwcGhohIiwjGiApHRwaJDUlKC4vMjIzGyI6PTgxPCwxMi8BCwsLDw4PHRERHS8pIygxLzMvMzMxMTExMS8yMTExMTEvMTEzMTExMzExMTExMTExMzExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAEDBQYHAv/EAEYQAAIBAgQEBAMDCQQJBQEAAAECEQADBBIhMQUiQVEGE2FxMoGRQqHBBxQjUmJykrHwM1OC0RYkVHODosPS4RdDssLTFf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACsRAAICAQQBAgYCAwEAAAAAAAABAhEDBBIhMUETIlFhcYGh0RSRUrHhBf/aAAwDAQACEQMRAD8A7NSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpVKAUqLieIWrX9pdtp++6r/ADNQbviTCgx56n1WXH1UEUJSb6MzSsfhOL2LjBEvIXIkJMMQOoUwSPWKyFCBSleSY1NAeqVCbilgNkN+0G2yl1Bn2mamUBWlKUApSlAKUpQClKUApSlAKUpQClKUApSlAUpSsdxXi1rDLN1onRVALM57Io1b1jYamBrQlK+jI0rR8T4su3IFtRZU7louOAfQHIpHu4q+HtMMz3bj9DnuXIb1NoEJ9Fiq7kb/AMXJVtEni/i1LbG3ZAuOpIZi2W2hBggtu7DXlUESpBKmtevcRe8ZvYgkfqK3lpB6ZA3MP3y3vV3EYewYFvD20AnZEWZ9hUa8LVsS/loO7ZV/nVW2zvw6eMY21z8yWty3lK2Ut206hAoLe5A1qz57WzmAGnfX7qgg2WPLbznoVsu/0ZUI+leMWjIDlW8hOwy3XBj9hlIUe0VDs1ioLjgri+NC5pcBZc0CRy5wAwAOwaCpExuIrN8O8U3LYay6sxg+Vd1uDQf+4xgmOkwWiJMzWE4Hhkc2gHVMsi5ZZSpZrckPbUkEBuQsCCDr1mcpb8PoGcZj5RHJbEg22O+VwfhG6rHKfQKBhLPtbRxZffxS4L+K8WXiBaRcrkn9LAgr0gaqjjdi0jQZQxbKuBv3rTuxvnzbiHOGuZrnLE50ViciiGBygDlJgVMvcNXKUZ5uaFbmUDKR8JUTp6ieaSDpAEa9hVVM1y5BH9owEgqRBREJ0kkRuS0bjloszZXH7HaSMtw9bFwFXA9iAFj3rz5C2mjDu9pR8PlsVWf3ByN8wa1/hucCDcKjWAIZhJJALvIaBp8I2rOYWyh1drrdsr5frlK1umd7gn7mr+XBlLPiW/aIF22Lq9WUeW8d4PI5/gFbPw/iFrELntNmEwdwQRrDKdVOoMEdR3rRMQpbQXLmXoGfOR82BNOG2r1q55lm65MQysisrjWAwUKdCZBkEa6wSDZSOXLpYyjcVT+Hg6RStU/0lvW/7XDyvVrZIPyRtB83rKYDxBh7xCh8rnQK4yEnss6N/hJq1o4ZYZxVtGYpVKrUmYpSlAKUpQClKUApSlAKUpQGB8UcYOGtrkjzLj5EkZgNCzMVBBMKp07kTAk1pFuy1x5lndvjuOZZo15jsFEmFEKJ0A2qd4ovZsZczE8ioiiTABXzGgbAksJI3yrOwqHw8XrjlMMpZ/tNOVE6/pHgx00gsdwDBrOVt0etpscMeL1G1bMocNasLLnM0aDafYdB6msCnF0dytsea86hTyr6M+ygdtW7A1Kx2HVWNvzPOugxcuESiMPsW0Mh3Gku+YKRoA0hbOHtKggCBqe5JOpJJ1JJ1JOpO9Q+DfFunHd4fn4/RF0Ya4/9pcIn7Frl36F/jJ9VK+1ZbA8ARObKqE7kAFj+851J95qLwy5muINBrP0BI++tmzj5d6R5Ms0pRaSMPeRrB5XnMOwmB/X3VCdmYySSfrV3FYkXHJn29hWQ4dctohYsARqxMCB79qdsvL2Q3NcmFe2GEMAR2InaqNxFrK81wFO7HmX5nVl99R3I217xf4vNxzaw4KZCwe4whpmCAhErB6sJ30G50a42aXYlj3MsfbXX5VLwKa9xx5NTBqq5OnW8Ub5Pl3FCgkFpDMY0OQbDX7RnbYjWpWH4faDZrlsXev6Q59e4BlR7AAVyNFAOYaHoRoR7Eaitx8J8Yvu5tSbgCFgN35ILAADnheaPi5T8RgU9HYuBhzY37ZKvmbzibtt1yeRbA9VUx7aaVB//AJ9r+6t+nIuntppXu3cDqGBBUgEEetenaBNQ2ehCCXCRaOCA+C5cT2bMP4XzAD2AonEr9nlEOszygKf4WkN7hh6CpdniTBCsAiCIPY9j1rHE1DZeONStSRlcN4hR15gSRodI/iUwVPoRWMxLI5aFAU/Z3FR79lW1OjDZhoR8+o9DI9Kt2Melon84UZdhcBKD568p9CYOkHoI5ZKhHHbo2Hg/HWsHLcZmtdcxLFP2gTqVHVT022ynfAZrlGYHVfhOo66dNa3TwZjGewyMrDyn8sT+rlVgAeoAaBHQL1kVpCXg83XYIxrJFVfZstKUq55wpSlAKUpQClKUApSlAafxbwo2IxZulwth1QvlJzs6gqVGkKpUJzSToQACQwveJMUuCwq2cOottcJS3lA5AQWuXPVgJ1My7LMya2kmouMwVu8uW5bVxvDCYPcdj6ioNFk5W7lLwcrw6BFAGw0/o9auG6Kz+O8FvbH+rtnQDRGIVgB0Vvhb55dtSa1zF4d7Ry3FZCTADjLJ7KTo/wDhJrNwPZxamElUX9i6zwJqtziFxhDMT/X8/WoKYkFmQGSsZvTNMCdp0OnSrgaoo1clLkujFFdgSSQAACSxJgAAakkwIFbTh+FjB2LmNxAz3bdt7i25BVMozBR0a4SAM3SYXqWt+B+EBoxjiZkWAeiHQ3B6tqAf1djzmvX5RuJIcJewyXU84m1+jzDMVN1CwA6nJJI3AIOxBq8YpcnlarUub2RfH+zjOQ3CSxLMxLO3VmYyzHvJMmvN4BWAO+1SE4fcfnVToeWeWSN5B26j615vYZmJYo0HaQZA9ex6/StlJHNRGRVJmdpBHr/X86zHhviIwmLtXxCqjhbmsDy35bk9wFJaO6isWLDToh9o3FXr3DnggEHMvN1gkbjuB2qHJLsVwdf8UcH8hmxFsfo3P6VB9hmP9oB+qSebsTOxYjBKWMAazoB3muk4Qi5ZTMJD21zAiZDKJBHXeuc8Swr4LE5AeX47JOua3sVM7lCcp3MFCdWrGUfJ6Gj1LrZL7fozGH4OgALkluoBgf51h8SoV2UbBiB12NS73HeTlUhzv2X1HesP5tRJLwdeGU7bkXbzaVYaCINGaav4DAPiWC2kdxmXM6wqKFbmBuMCs6FSqhmE7daJE5csYq5GW4PhUxeZGPl4gKXV1GlxAQCXQQGYFlBYQTK67itj8McNuWfMNxQpJRAAwYFUBOYH1Z2GoB5RoKl8G4LbwobIWZmOrtEwPhXQAADsB3O5rK1ol5PGy5nK4rr4HqlKVJgKUpQClKUApSlAUpSufeK+LXGxBtLdYW062XZYfQEXXWGDAyAqkgDVtSIhuispbVZ0Glcqx3FMRctm1+cFgYKltCpG0PbKlhO4YtPoYIxlq0qsLkZLg+2hIYH0uCGj+jVXNIzeaKOnXPE+EWf9YQwSCVlxI0IlQRIOkVBx/i/CLKc12VBhUlWDCRDNCt20Jggg6ggc2xuKPm5ne3DSXmEZmOvmEDlLEzMBZ0O8lrD37YfOJmI0Dcw9eh9/86rvfgh5X4NrxWNwGI5gbmEZQLao1tXVgMzAqlotEa7Mu+2s1qfG+IrbL2lbOCBFxZRYPxfGAQ4E6AMNRroYhYnH527DoCV/zmrNy4Oon5E7ewrRRvs0jq8sY7Uy/d41cuP5gdlaIDq3MF7K6HkUdFWAOgFR3xLB/Me47Q4dizFp5pYknUmJqzcYNqbcnoYafrkkV4C7nPkXYZjMkb/FrHTXqDVqXRgm7s2TE4sKVEZgILkHRFaQGPfX6CT01pexaqSGU5Roz/ZDH7J10067dN6xXDna2uVVW4DvAIkRl1+IbD0FSTiiEFtLLjQ6HKdAdTOaTqRvrrWDi0dqywfktXMYrzply9/1eh/rtXizdzK7agqrSDvscp9j/wCKjspMHy2JGxIy/WYP3dB2qhQt+oDI+0TsZgjSdQD8qlRIllil2ZfDeIcUls2xfdbR3VGKn1i4ZdSdzkKyfczkB4jNyybdwXXVOa0zlCyuBsXe4GyMpZSGzNLAiMorVWcA5bjwdgFGWesyT9wI2O9XFygyLbE9CZaPY80Vo0csckoNSTNkxOLVbeZXBLLNuNZzDlaP1dRqYA6kVkVwyFmUYqxlDEeZ+kIIGzKoWG9s8dmO9aaj7xbAnUxIk+vLUrD44xka2xU6d99OmtUcaR2T/wDSyN+1V+TqGA8P4FSFu30vOQDkd1VTmH90DzKR0fNW3W0CgBQAAIAGgAGwArh1jEoBlEADSCMoE+hAqZgrroIR7iLOaEuOgkwJAUgA6b1HqV4OZ6iUncjtNK5Xg/EeMt3QPMe4m5V/LjT7OfKbkn9bUDsaz2G8eLmC3rDLJ0Ns+ZHqwIUgeuvtVlNMlZIs3elQeH8TtYgZrVxXjcDQrP6ymGX5ip1XNBSlKAUpSgKVq3ivxAcOVtK622YZmd4ACyQAmbRmJB7wBruKzHGOKLhrfmMrvLBVVcssSCdMxAGgJ1I2rTsd4ixN7QEWUP2UOZiP2rpAiRGigEH7RqsmUnJJdlrE8exVy2yedbhxGYIQwB6qyuAD6xWMsJkQBiCQIkLkGnZZMVTIlsEwFGpY9yTJJO7Ek77kmvWIblGnTWfxrNyOWUm+yJfYk6R7k/h1+oqFjMGTLPccj9UQq/QCW9iTUi2LnMXESZUdlIBWexI1I6EkdK9le+o/y1qnkpymY9MJbUAZQepnmGusCeleTh7anRcoaQxVdQAGIA9zPzIHaveEfzENydC7ZR+yDlBHuBPzq3duy3lr8WXOD2IYZfv1+VXjw+Sztl/DcHW8A9rEgrGxtGQdN+cR7EdauXPDt3pctt7hk/7qhYW26DzLekbafYIzKGHWFIHuD61svCuIrdENy3Buv4g9R/WldMXF8eTTNhnjipLlPp/s1i7gTZdfzjKEKsF5pDNKwANCxidIqZh1WJt2wg7lcn0XRvrFZXjaw1twjMQHUZVkjNlO/wBkHJuYG1YZL9y5qiqi9WbmkfsgEAn1kj1O1YZIu/kYqVoltbkb61ExiAEdyrqPdigH31NRYG5Pcnr+H00q3ibDFrZjQNLe24jvzBfqazRKZ7RCJBqlxUyw6gr1lZ+vYepq42gn/wA/dVEcFQysCCJBB0ioIsx2K4eiobltFVlgmDlBUTIMaQAS23T1qbZ8Ou0FrqgEbKhJ1/aLR/y1FfhyBxlEZ251XkzA6M0rqCBr2PaTNbFjMeli3mcxEKJ6nYD1JrpxRtWyspu0l2Yu5wOxaBe5euZeslB9ISfvrF3DbLHy7boFQkFnJbOWC25XUAE/yMgVfZbmIcORJHw9lnt6x1/lSygXrOZixP7NvkX5FszCjkndLhHZPTPFi3Tfub4XwLrJrpow2P4HuPSo9mwMzOEhvtgaFvUMIM+vWIMdPWDxBeZHMpIIHoSAfnH1kdKktdVXVSYLTlnrG4B79Y/yMc9NcHOenQiTnYQNjDD/ALj9aohfZgp9VO4OxA1/n9auzUa04tsLZ0VvgPb9j5bj0kdKghGR4JiGw13zQq3XE5S5ZSAwgqpUhAPUoT6mt5wXi+w8C6Gst3cSnqfMGij1fLWjpajqNdq8Xb7o4Bt5kP21YDKezhiAB+1PyGk6Rk0aQySXB123cDAFSCDqCDII9D1r3XKLWONlotNct3SwHlICru7bBrTCGJAOrLoAToNa6Nwfz/KX85yeaZLBAQACeUHUywESRAmY0q8XZ0Rlu8GRpSq1YuYHxTw67iLdtbWTMtwMc7FRlyOp1Ckkyw0itF4iow93Jdv5QgMgp5Su2hJQtzOqjTMDDEnQRr1evLKDoarKNlJ41I5bi8KIt+cIdoupbbQoiHkZ1mc7NqAZyhCDDHSvD8F+c30tRKk5rn+7SCwP7xKp/jnpXTb1hHEOisOzAH+dax4pu28Dhz+b20tXLzC2GtqqkASzNoBqFzAHoziq+nbRnKCj7n0jn93jFt87ySXZ7kAM0G4xcrtpBMR0isecYzWgmVs5XKzaAAn4iJMnqRp2q867ADQVHvaGBuYgerGFH1rdaeK5ZxLLb6POHxL2xkVFIBYgliIDGYjL696s3GIYuXIJ05QDocoCgEEkyBEaktWWTAqBEyep7nqam8E4apYXmEqP7MEbnY3PwX0k6yIt6cVyI5U+jxwvhd5UUM+WQQ8wWILF1GgyqRmYGB7HSayuF4PatsHFsZxsx1bXfmMk/Wp0moFt7bk58xYlgM+dVIUnS2vwMBsWEnuamkiXknJbW3S8eCcy1rmOtXLbMETl+IOSAqg6kEDXTWBERGorPMMqmBtsB+FCqXE1AZHXUHYqw2I9qiUVLsopUarhsOzRduOSqjMs8o2+IrsB2mSNydozCoSNai8SwLZrYdx5IcEzI+HmXOdjzBQJ0PXWKvcXutbVMkli4MbyqAuR84C/4q5pQ91G6aast3Fhgs6n4fWNwPX0qC2GZLkKoK3CZQ7FoJaOgJAJ7EzO4IncUFu8nlqA7MFdSNrfVbhPQjoOu20kScPhQupLM0QGYyQOwPb7zpJMCpx493PgpOaiR+FYE2wSxJYzAY5sizIWev39BJipgvoTGdSe2YH7qvWkzLm77e3f571a0dxaADu2yaagakmdAB3P866kklSMGpSfzLT4NSDlm2T9pDlM9yBo3zBrA8VwpS5JWFIVbbAn4VX4SehnMY7H0MbHYUgFXXKysylZzQVJGh6jt6V5x1lbltkPUaEbgjYj1B1pSJWWadSb4/BqlssmqEBtdWl5kyZ1BOvrVcTde4oVghgggiRBHUb9JHzr2LbSVI5hoex7EehGv3bg1cTDyPWjxxbujT1aLN/FOyFMrFt1uKwUgjYmevfoRPeKm4S+9xkteSbjsQq/AFLQSMxZ1AmIiROwOomLYcaep/A1Lj39wSD8iNQfWq+jF9B5drXBsHFODXLS5LttyjKCpXM5XYlHdRo6Ns+maAw1kCDw21cCMpLXfLHOcpDhDs5UDnXoSvMukjKQ53/wfxg4mxztN22clzpJiVeNPiWDppOYDatirBwO9QjJWumaP4WfEKyKuHdrIlc1xfLNpT/dF4Zk0HKAREQRGU7xSlSlRolSorSqVWpJFKUoClcy/KNdNzErbmAlkEEHY3HOcehy2019a6bXIfFd5mxmILjLlYAAyORbaw0ncHUyNNY3Bq+NcnPqXUDFAAf1NWcPZL4kmOVUUj94s6/cM31q8sET+BH3GpPDVGa4f3F+QBP/ANjW8ujzI+RctyyoTozQx/Zgk/UCPnPStkS4uwrXMWub4TzKZX3HQ+hEg+hNXrGIJUMJ177gjQg+oOnyqKsqpUZ4vU0cLGLwAtoZa3cOZJAkoxIUn7JKsrjbddRMjW7XFsmlwER9qDEdyfs/OKnYXHCTcs3jbYgKWQqZAMgFWDI0SYJBIkxEmqSi2qOvT5lCVlMVwzE4a2126UyFhFsSXQMYAVpIaCYykkwCc52pw+0y24P6zkful2K/8pFSMRde6we47XCvw5oAWeyqAoPSYn1qoNEmlyMkoyk3FUipSdKxw4Wlts6iIBAEmFzEE5V2Gw2rITVu/tUmMroi4bCouigAEyYqayCIqxaMSauhh3qSI15ImDU5rVq63lW8oU3BHxAAASRCA68x7ARrI2XhPhUYa4t17wZLOdkJGU8ysCbjEwQAx16mDygRWCe8o6zUC5xC3pbWCd1tjXUdVtjWR6CqSjZ1YdR6aaS5ZOxt8PduOBAdyR+6OVTHSQAY9ahX7g2qG+NJYqEbMJBzApEbzmg/ca8IjSSzSTsBsB+J9dOnatEjim222y1i1AKuN5Ce4J/D4vYN3qkV4L53kfCsgerfaPy+H+KvTCKkqzGAxcy9rh+9Tc/GsgDURE/TOY0Cg/Nhl+4If4qlyalGk3dfQzfg7GNaxlv9W6Daf6Fkb1Idco/3jV1euLcL1xOHAOvn2Tp+zdQn+X0rtRrDIuT0NI28fJWlKVmdQpSlAKUpQFK55+UvhfNbxQEgr5N30ElrZ7ASzqe5dK6HUXG4RbyPadZRwVYeh9eh6gjUGpi6dlJwU4tM4irwN9vnXvA3+e4oOuVCfmWH4VHxNry3uW5LKtx1Vj9tUcqrGNASAD8/kLdm6bbTAKs3MeqyIkekhZ7amuhuzzHjpOjLzXh7ZnMjlT1GjKfdT+BB9auBKrAFDmsjvfYEB4CtyHXSW0WD3JMQe4iYNXcbiUt2LltrQZ7rjy7gVRklRn5vjVoQlSJ1bpAmrhWBUiQRBB6io+JtG7bKgjzLZBg/aGoDekgkT0YdqrK2jo081Gab68/Qk8DwRNvObl0FmaOcnKASogNI1idutZEW7qfDcDjtcABP+NQAP4TWG8P4/wAubNzlGYlC2kMxlkboJJkHY5vadjsjOAyEMCJBBkEHYg9RVIvg9meHHLwufgQ7vFHt6sotkEauJWJ1hgYkiY10kEjpR+L222Zf4l/zrKLhW9qquBjsPlVtxyy0N9S/BgDxMZoVwxgQiDO25BJCyY21MARvV783uXBLObc9Fylh7kygPoAfesz+aHvXh8MwqHJl8eijHmXJjLnCrTqVZSwIglmYn3EmFPsBWtYC9cwt5Wthc6XCkEQrqWyEGNQGEHTbTeK2fGcQS2rQwZxpkBE5okT2Hc9BWuYPDsW8+4YUZn68zNMtHRdTA6yI2E0a3SRvOUcOOT+VJfFk3FYkIwBJZ7hY6CSdczNHQZm9BJGoAkWmzvoWKr2U6n959/4Y+dLepLsIZgJ2kKNln0n6k1eQiuk8Fv8AsrZtqoAAAAEADSAOgHSq3Nq9O6gEnYak9hXm6/SKqVItv43Poo+mY/iKq94awZgwah+YSzGdC3/xhfwn517wth7txLSLmuXDCLtJAJOvQAAknsKm6NljbZsP5PuHG5jM5lltKbjEx8TDy0U6RtnYfuV12sR4c4MuEsLaXVviuNEZ3MSfaAAOwArMVzyds9THDZGhSlKqaClKUApSlAKg8Ve4LNw2hNzK2Tb4o0MEgGN4JExU6lAcm4x4TxBKvZwbBYhkz2pkRDR5hzFpOYzJImCSTWHu+HXFouyfpBc8s2DbLPEgdJJJBzgAGV+7uFWTh0LByi5wIDQMwB6BtwPSrb3VGTxRbs4mbF21lS4jo6wwW4CM6wQCevf2Zdu95LkjXQ9Y1++uoeJ+BLi7UAhbqSbbnoTurdcjQJ9gdSBXKLzMjsjoyOpKuD9lh0MfUESCIMwROsJbjz9Rg2O10eruIA0/r2968ss6gkEbMNx7f5HQ9a8i+p2YH2M1R74G59huT7Dc1pRhR7e4hZDcChgywxEo8NmyOpPwmCCpOxMNJqdc4mbS3LjMRde9+jtS3li22rTcCjViW0bYqoAgkmNwHCNicVZQrobgYrvCJzvm6aqCv+Id66LxLwdauGbLeSYjKFDJ/BoR7KwHpWM6s79M8kY2uUvH6ZpaeKT9rDXD+4UI+8irn+lKf7Pf+lr/APSs035Pz+tZP/Cj7ta8r+To/wB7ZHtYn/qCqff8Hd/Il/g/7Rhv9Kk/2e99Lf8A31YPHxduIlz/AFe0c2a4zahsjZNtAPMybmDsd9di/wDTof3tk/8AAj/qGqW/yfsplXsr6i0ZH0Yfzp9/wRLPJxdQd/VGnljct2jiFUeVnGbWbvmOX51gaSdEiT2Elatu7OczaRqq9vU92+4dO594hGFx87Bij3LakCBlR2QFVkxmUAnUkzuQBVAK3ikkeRlySlJ7v+L6Hi04YBhsRI9QdQa9US2FEAQO1Ua4ACe2/pVjLvoq9oNEz7SRPuBvXjEu0Qol2IRB3dzC/fr7A1czVuf5POHK4uYh0nVrSE6qVgZyBsebkJ1+EjTmms3Ss0w498kjR7/AMTaZLTLnZgcotBnnLEg6ZhEjWI9a2nwrwS/hLiX7lm4rlwmXL5n6K4QrElSwQg88mCAuWBLT0XDYO3bnIipO+UATUmsHJtUepHFGLsrSlKqaClKUApSlAKUpQClKUApSlAUrn/iTw4+IuYi4lm4bpdCjSoVlS2iheZwDmhpYaiF00IboFKlNrorKKkqZx7A+ELrXks3UewGV2zSCIQDlQqxUucwMTsrnpUG3wi9ne3bsPcdSykopykjabh5Vn9ptNRuDXZ8VhVuLlZZG41IIPdWGqnfUa61XD2QihFEKBAH/AJ3J9TvVvUlZg9NCq5NX8LcCXD33fynU+TbQG5BIaSbhDKSpz8hIUwMnSa2+lKodCSSpFaUpQkVZv3VRWdjCqpZiegUST9KvVh+OFz5aLbZ1LFnyiZyLKKTIyy5VpJjkIO9AcitkwMwKtAzKwIIaJIIOoPvXrNWw+I+BYkXjeGHYoyqT5Z8xgyjLzouswFHLmHLvV3AeG1uYNnYfpboYWyRraKyFIB2YMAT16d533pRs8x6aUptfk1iaoUUmSAT3jtVhcUvli4xAGXMZO2k1tI8IXGGHGYq1y5lunSETIznL3cBMoOurTsNLSko9mcMMp9F3wj4cGJY3b1sGwuiq2ouuDrK9UXaPtHTYEHpFq0qKFRQqgQFAAAA2AA0AqmHsLbRURQqqAqqNgoEAD5VerCUrdnp48ahGkVpSlVNBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFYi/wRHZizObbHM1qeQsfiPcBoBKghSZJBzNOXpQEW1gLSaratqfRFH8hUbD8LW2ylHdUSctqQUUkZZWRmUBSQFDBQD8NZOlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUB/9k="
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Venusaur</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Grass
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>

		
		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://cdn.media.amplience.net/s/hottopic/17401466_hi"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Charmander</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-orange-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 210%;">
							Fire
					</button>
					</a>
				</div>
			</div>
		</div>


		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Charmeleon</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
						<button class="bg-orange-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 210%;">
							Fire
							</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Charizard</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-orange-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Fire
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class=" ml-5 text-white font-bold py-2 px-4 border rounded" style="background-color: #BEADFA;">
							Flaying
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://i.pinimg.com/1200x/53/e2/1a/53e21afd8d22d17a975363767536029f.jpg"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Squirtle</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-blue-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 150%;">
							Water
					</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://i.pinimg.com/474x/9d/7f/17/9d7f178530bda4cf910aaa15bdee11a1.jpg"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Wartotle</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
						<button class="bg-blue-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 150%;">
							Water
							</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://i5.walmartimages.com/asr/f02ba167-0d74-4e29-9162-deb44ac369ea.688ba432d6eae7ab9fadd35dd47b5c58.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Blastoise</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
						<button class="bg-blue-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 150%;">
							Water
							</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://reidosticker.com.br/cdn/shop/files/caterpie-rei-do-sticker_23bb8dc5-d991-47c3-9ea1-96aece5e0eef.jpg?v=1691777776"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Caterpie</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 210%;">
							Bug
					</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c02cdf55-057c-493a-9467-7fbcc417064b/dfuawfv-927df917-ffaa-445f-adcb-2ada29a8574b.png/v1/fill/w_894,h_894/free_png_pokemon___metapod_by_jim32_hq32ol_dfuawfv-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2MwMmNkZjU1LTA1N2MtNDkzYS05NDY3LTdmYmNjNDE3MDY0YlwvZGZ1YXdmdi05MjdkZjkxNy1mZmFhLTQ0NWYtYWRjYi0yYWRhMjlhODU3NGIucG5nIiwid2lkdGgiOiI8PTE4MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.km_gjH7obGt1sGlEzaura_uVU11IgdN78hmtSHqRFJY"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Metapod</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded"
							style="margin-left: 210%;">
							Bug
							</button>
					</a>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/eacd20285cb634ba9fea41fc0fa13871c2fcbc66.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Butterfree</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Bug
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class=" ml-5 text-white font-bold py-2 px-4 border rounded" style="background-color: #BEADFA;">
							Flaying
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://www.pngitem.com/pimgs/m/526-5268183_weedle-pokemon-hd-png-download.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Weedle</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Bug
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded" >
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>


		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Kakuna</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">
						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Bug
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded" >
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="group cursor mx-4 overflow-hidden rounded-2xl bg-white shadow-xl duration-200 hover:-translate-y-4">
			<div class="flex h-80 flex-col justify-between overflow-hidden">
				<img src="https://img.pokemondb.net/artwork/large/beedrill-mega.jpg"
					class="group-hover:scale-110 h-full w-full object-cover duration-200" />
			</div>
			<div class="flex-1 overflow-hidden bg-white px-6 py-8">
				<h5 class="group-hover:text-indigo-600 mb-4 text-xl text-center font-bold">Beedrill</h5>
				<div class="flex justify-between">
					<a href="#" class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600">

						<button class="bg-green-500 ml-5 text-white font-bold py-2 px-4 border rounded">
							Bug
						</button>

					</a>
					<div class="max-w-full flex-none lg:px-4">
						<button class="bg-purple-500 ml-5 text-white font-bold py-2 px-4 border rounded" >
							Poison
						</button>
					</div>
				</div>
			</div>
		</div>
		

	</div>
</template>
<script>
</script>
  