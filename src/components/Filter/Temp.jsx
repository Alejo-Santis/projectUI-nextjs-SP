{
  /* <Grid
  container
  spacing={2}
>
  <Grid
    item
    xs={12}
    m={2}
    display="flex"
    justifyContent="space-between"
  >
    <Card
      sx={{
        display: "flex",
        padding: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box>
        <TextField
          id="origin"
          label="Origin"
          size=""
          placeholder="Leaving from..."
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      </Box>
      <Box>
        <IconButton>
          <SwapHorizIcon
            sx={{
              width: "30px",
              border: "1px solid gray",
              borderRadius: "50%",
            }}
          />
        </IconButton>
      </Box>
      <Box>
        <TextField
          id="destination"
          label="Destination"
          placeholder="Going to..."
          InputLabelProps={{
            shrink: true,
          }}
          required
        />
      </Box>
    </Card>
  </Grid>
  <Grid
    item
    xs={12}
    m={2}
    display="flex"
    justifyContent="center"
  >
    <Card
      sx={{
        display: "flex",
        padding: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box>
        <DatePicker
          label="Departure Date"
          views={["year", "month", "day"]}
          value={value.value}
          onChange={(newValue) => setValue({ ...value, newValue })}
          renderInput={(params) => <TextField {...params} />}
          required
        />
      </Box>
      <Box>
        <DatePicker
          label="Destination Date"
          views={["year", "month", "day"]}
          value={value.valueTo}
          onChange={(newValue) => setValue({ ...value, newValue })}
          renderInput={(params) => <TextField {...params} />}
          required
        />
      </Box>

      <Box>
        <TextField
          label="¨Passengers"
          variant="outlined"
          value={`${adults} Adults, ${children} Children`}
          onClick={handleClick}
          required
        />
        <Popover
          id={id}
          open={openPoppover}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box>
            <div>
              <span>Adults</span>
              <IconButton
                color="primary"
                onClick={() => handleIncrement("adults")}
              >
                <AddIcon />
              </IconButton>
              <span>{adults}</span>
              <IconButton
                color="primary"
                onClick={() => handleDecrement("adults")}
              >
                <RemoveIcon />
              </IconButton>
            </div>
            <div>
              <span>Children</span>
              <IconButton
                color="primary"
                onClick={() => handleIncrement("children")}
              >
                <AddIcon />
              </IconButton>
              <span>{children}</span>
              <IconButton
                color="primary"
                onClick={() => handleDecrement("children")}
              >
                <RemoveIcon />
              </IconButton>
            </div>
          </Box>
        </Popover>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="error"
          startIcon={<SearchIcon />}
          sx={{
            p: "1rem 0.8rem 1rem 0.8rem",
            m: "0 0.02rem",
          }}
        >
          Search
        </Button>
      </Box>
    </Card>
  </Grid>
</Grid>; */
}
