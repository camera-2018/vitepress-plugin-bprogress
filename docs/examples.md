# Examples

See the BProgress plugin in action with various configurations.

## Test Navigation

Click these links to see the progress bar working:

- [Home](/) - Return to homepage
- [Guide](/guide) - Usage guide
- [API](/api) - API documentation  
- [Introduction](/introduction) - Getting started
- [Installation](/installation) - Setup guide
- [Configuration](/configuration) - Config options

## Example Configurations

### Minimal Setup
```ts
vitepressBprogress({ app, router, siteData })
```

### With Spinner
```ts
const BProgress = vitepressBprogress({ app, router, siteData })
BProgress?.configure({ showSpinner: true })
```

### Custom Speed
```ts
const BProgress = vitepressBprogress({ app, router, siteData })
BProgress?.configure({ 
  speed: 400,
  trickleSpeed: 300 
})
```

### Full Configuration
```ts
const BProgress = vitepressBprogress({ app, router, siteData })
BProgress?.configure({
  showSpinner: true,
  minimum: 0.1,
  speed: 300,
  trickle: true,
  trickleSpeed: 250,
  easing: 'ease',
  direction: 'ltr'
})
```

## Testing

Navigate between any pages on this site to see the progress bar in action!