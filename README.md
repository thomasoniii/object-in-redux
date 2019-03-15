This is probably more code than is worth it for such a simple demonstration.

See it live @ https://thomasoniii.github.io/object-in-redux

All it does is demonstrate adding a "layer" object to the store in two different manners -
it'll either create a formal object which has a method attached to it to call for more info
or it'll just store the data related to the object and then create the formal object when
it comes out of the store via a selector.

To demonstrate, there's the "add layer" button which adds data to the store in a serializable
manner, and the "add layer badly" button which adds data in a non-serializable manner.

Useful code to look at includes:
* components/LayerDetail.js
* actions/layers.js
* reducers/layers.js

So how can we use this? The specific case that I was looking at was this line of code:

layerFilerDimension = yield call(layerCrossfilter.dimension, geocol)

which is creating a dimension object using a geocol value. Instead, don't create that object.
Just store the geocol in the store and write up a selector to create the dimension object upon
access not save. All references to the dimension object would need to be updated to retrieve
it in that manner, but then it should resolve the issue.

Alternatively, it could just be instantiated with no need for a selector at all. So
instead of doing this:

lineLayer.dimension.foo()

you'd do this:

const dimension = LayerCrossFilter.dimension(layer.geocol);
dimension.foo();

That LayerCrossFilter.dimension could be wrapped up and abstracted, but it may not be necessary.
