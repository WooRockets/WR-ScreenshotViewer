(function($) {
	$(document).ready(function() {
		var thumb = $( '.thumb a' ),
			large = $( '.content img' ),
			loader_wrap = $( '.loader-wrap' ),
			loader = $( '.loader' );

		$( 'body' ).addClass( 'loaded' );

		setTimeout(function () {
			$( 'body' ).removeClass( 'loaded' );
			loader.css( 'opacity', '0' );
			loader_wrap.removeClass( 'loading' );
		}, 3000);

		thumb.click(function(){
			$(this).parent().addClass( 'selected' ).siblings().removeClass( 'selected' );
			loader.css( 'opacity', '1' );
			loader_wrap.addClass( 'loading' );
			$( 'body' ).addClass( 'loaded' );
			setTimeout(function () {
				loader.css( 'opacity', '0' );
				loader_wrap.removeClass( 'loading' );
				$( 'body' ).removeClass( 'loaded' );
			}, 3000);
		});

		function hashChangeHandler() {
			var link = $( 'a[data-original][href='+ location.hash +']' ).attr( 'data-original' );
			large.attr( 'src', link );
		}

		window.onhashchange = hashChangeHandler;
		hashChangeHandler();

	});
})(jQuery);